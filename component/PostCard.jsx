import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
  // console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-xl p-0 lg:p-8 pb-12 mb-8 outline outline-2 outline-offset-0 outline-gray-300 border-gray-300'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
          <img 
            src={post.featuredimage.url} 
            alt={post.title} 
            className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-xl lg:rounded-xl' 
          />
        </div>
        <h1 className='transition duration-700 text-center mb-8 cursor-pointer
          hover:text-blue-600 text-3xl font-semibold'
        >
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
        <div className='flex lg:flex-row flex-col text-center items-center justify-center mb-8 w-full'>
          <div className='flex justify-center w-full lg:w-auto mr-0 lg:mr-8 lg:mb-0 mb-4'>
            <img 
              alt={post.author.name}
              height='30px'
              width='30px'
              src={post.author.photo.url}
              className='align-middle rounded-full'
            />
            <p className='align-middle text-gray-700 ml-2 text-lg'>{post.author.name} </p>
          </div>
          <div className='font-medium text-gray-700 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className=''>
              {moment(post.createdAt).format('DD MMMM, YYYY')}
            </span>
          </div>
        </div>
        <p className='text-center text-lg text-gray-700 px-4 font-normal lg:px-20 mb-8'>
          {post.excert}
        </p>
        <div className='text-center'>
          <Link href={`/post/${post.slug}`}>
            <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-600 hover:bg-blue-700 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
              Continue Reading
            </span>
          </Link>
        </div>
    </div>
  )
}

export default PostCard