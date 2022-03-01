import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPost,getSimilarPost } from '../services';

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(()=>{
    if(slug){
      getSimilarPost(categories,slug)
        .then((res)=>setRelatedPosts([...res]));
    }else{
      getRecentPost()
        .then(res=>setRelatedPosts([...res]));
    }
  },[slug])

  // console.log(relatedPosts)
  return (
    <div className='bg-white shadow-lg rounded-xl p-4 sm:p-8 outline outline-2 outline-gray-300 mb-8'>
      <h3 className='font-semibold mb-8 text-xl border-b pb-4'>
        {slug? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post)=>(
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img alt={post.title} height='60px' width='60px' className='align-middle rounded-full' src={post.featuredimage.url} />
          </div>

          <div className='flex-grow ml-4'>
            <p className='text-gray-500 text-xs'>
              {moment(post.createdAt).format('DD MMMM, YYYY')}
            </p>
            <Link className='text-sm' key={post.title} href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </div>

        </div>
      ))}
    </div>
  )
}

export default PostWidget