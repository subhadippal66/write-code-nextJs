import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
  return (
    <div className='text-center mb-8 mt-20 relative rounded-xl border-gray-300 bg-white p-4 shadow-lg outline outline-2 outline-offset-0 outline-gray-300 '>
        <div className='absolute left-0 right-0 -top-14'>
            <Image 
                alt={author.name}
                unoptimized
                height='100px'
                width='100px'
                className='align-middle rounded-full'
                src={author.photo.url}
            />
        </div>
        <h3 className='text-gray-700 my-2 mt-8 text-xl font-bold'>{author.name}</h3>
        <p className='text-gray-500 text-lg '> {author.bio} </p>
    </div>
  )
}

export default Author