// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphqlToken = process.env.GRAPHCMS_TOKEN;

export default async function comments(req, res){

  // console.log(graphqlToken);
  const {name, email, comment, slug} = (req.body);

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization : `Bearer ${graphqlToken}`
    }
  }) 

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data: {name: $name, email:$email,comment:$comment, post:{connect:{slug:$slug}}}){id}
    }
  `
  const result = await graphQLClient.request(query,{name, email, comment, slug})

  return res.status(200).send(result);
}