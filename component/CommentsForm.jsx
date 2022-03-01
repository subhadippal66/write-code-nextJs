import React, {useRef, useEffect, useState} from 'react'
import { submitComment } from '../services'

const CommentsForm = ({slug}) => {

    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const commentEL = useRef();
    const nameEL = useRef();
    const emailEL = useRef();
    const storeDataEL = useRef();

    const handleCommentSubmission = ()=>{

        const {value:comment} = commentEL.current;
        const {value:name} = nameEL.current;
        const {value:email} = emailEL.current;
        // const {checked:storeData} = storeDataEL.current;

        if(!comment || !name || !email){
            setError(true);
            return;
        }else{
            setError(false);
        }

        const commentObj = {
            name, email, comment, slug
        }

        // if(storeData){
        //     window.localStorage.setItem('name', name)
        //     window.localStorage.setItem('email', email)
        // }else{
        //     window.localStorage.removeItem('name', name)
        //     window.localStorage.removeItem('email', email)
        // }

        submitComment(commentObj).then(res=>{
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000);
        })
    }

  return (
    <div className='mb-8 rounded-xl border-gray-300 bg-white p-4 sm:p-8 pb-12 shadow-lg outline outline-2 outline-offset-0 outline-gray-300'>
        <h1 className='text-xl mb-8 font-semibold border-b pb-4'>Comments</h1>
        <div className='grid grid-cols-1  gap-4 mb-4'>
            <textarea ref={commentEL} 
                className='p-4 outline-none w-full rounded-xl focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                placeholder='Comment'
                name='comment'
            />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
            <input 
                type='text'
                ref={nameEL}
                className='py-2 px-4 outline-none w-full rounded-xl focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                placeholder='Name'
                name='name'
            />
            <input 
                type='text'
                ref={emailEL}
                className='py-2 px-4 outline-none w-full rounded-xl focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                placeholder='Email'
                name='email'
            />
        </div>
        {/* <div className='grid grid-cols-1 gap-4 mb-4'>
            <div>
                <input className='' ref={storeDataEL} type='checkbox' id='storedata' name='storedata' />
                <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storedata'>Save my email and name for the next time i comment</label>
            </div>
        </div> */}
        {error && <p className='text-xs text-red-500'>All fields are required</p>}
        <div className='mt-8'>
            <button type='button' 
                className='transition duration-300 ease-in bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 text-base cursor-pointer'
                onClick={handleCommentSubmission}
            >
                Post Comment
            </button>
            {showSuccessMessage && <span className='text float-right mt-3 text-green-700'>Comment submitted for review ✔</span>}
        </div>
    </div>
  )
}

export default CommentsForm