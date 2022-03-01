import React, {useEffect, useState} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

const Comments = ({slug}) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);
  
console.log(comments);
  return <>
      {comments.length>0 && (
        <div className='bg-white shadow-lg rounded-xl p-4 sm:p-8 outline outline-2 outline-gray-300 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b border-gray-300 pb-4'>
            {comments.length}
            {' '}
            Comments
          </h3>
          {
            comments.map((comment)=>(
              <div key={comment.createdAt} className='border-b border-gray-200 mb-4 pb-2'>
                <p className='mb-2'>
                  <span className='font-semibold'>{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('DD MMMM, YYYY')}
                </p>
                <p className='whitespace-pre-line text-gray-600 w-full'>
                  {parse(comment.comment)}
                </p>
              </div>
            ))
          }
        </div>
      )}
  </>
}

export default Comments