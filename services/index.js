import { request, gql } from "graphql-request";


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
// const graphqlAPI = ''

export const getPosts = async () => {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excert
              featuredimage {
                url
              }
              categories {
                ... on Category {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
};

export const getPostDetails = async(slug)=>{
  const query = gql`
      query GetPostDetails($slug: String!) {
        post(where: {slug: $slug}){
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excert
          featuredimage {
            url
          }
          categories {
            ... on Category {
              name
              slug
            }
          }
          content {
            html
            raw
          }
        }  
      }
    `;
  
    const result = await request(graphqlAPI, query, {slug});
    return result.post;
}

export const getRecentPost = async()=>{
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy: createdAt_ASC
        last:3  
      ){
        title
        featuredimage{
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
}

export const getSimilarPost = async(categories, slug)=>{
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query, {categories, slug});
  return result.posts;
}


export const getCategories = async ()=>{
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.categories;
}

export const submitComment = async(obj)=>{
  const result = await fetch('/api/comments', {
    method:'POST',
    body:JSON.stringify(obj),
    headers:{
      'Content-Type' : 'application/json'
    }
  })

  return result.json();
}

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};