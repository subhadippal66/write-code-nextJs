import Link from 'next/link'
import React, {useState, useEffect} from 'react'

import {getCategories} from '../services'

const Categories = () => {

  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    getCategories()
      .then(res=>{setCategories(res)})
  },[])

  // console.log(categories)
  return (
    <div className='bg-white shadow-lg rounded-xl p-4 sm:p-8 outline outline-2 outline-gray-300 mb-8'>
      <h3 className='font-semibold mb-8 text-xl border-b pb-4'>
        categories
      </h3>
      {categories.map((category)=>(
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories