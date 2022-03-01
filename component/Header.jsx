import React, {useContext} from 'react'

import Link from 'next/link'

const categories = [
    {name:'My-Portfolio', slug:'https://www.subhadip.me/'},
]

const Header = () => {


  return (
    <div className='mx-auto px-10 mb-8 bg-white py-2 border-b-2 border-grey-300'>
        <div className='container w-full inline-block'>
            <div className='float-left block py-2'>
                <Link key='home' href='/'>
                    <span className='cursor-pointer font-bold text-2xl text-blue-600'>
                        {'<>write-code</>'}
                    </span>
                </Link>
            </div>
            <div className='float-right contents'>
                {categories.map((category)=>(
                    <Link key={category.slug} href={category.slug}>
                        <span className="float-right align-middle text-gray-800 font-semibold text-sm cursor-pointer hover:bg-slate-100 hover:text-blue-700 transition duration-500 rounded-full py-2 px-2">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header