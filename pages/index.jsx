import Head from 'next/head'

import {getPosts} from '../services'

import {PostCard, PostWidget, Categories, Loader} from '../component'
import { useRouter } from 'next/router'



// const posts_ = [
//   {title:'ahsgags', excerpt:'fhjdfshdbvhvsdvsdbvhsdvbh'},
//   {title:'ahsgagub', excerpt:'fhjdfshdbvhvsdvsdbvhsdvbh'},
// ]

const Home = ({posts}) => {

  const router = useRouter()

    if(router.isFallback){
        return (<Loader />)
    }
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>write-code</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        <div className='lg:col-span-8 col-span-1' >
          {posts.map((post, index)=>(
            <PostCard post={post.node} key={index}/>
          ))}
        </div>

        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
            </div>     
        </div>
      </div>
      
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default Home


