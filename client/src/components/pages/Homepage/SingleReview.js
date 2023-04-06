import React from 'react'
import './singlereview.css'
const SingleReview = props => {
  return (
    <div className='review-card'>
      <div className='review-card-inner'>
        <div className='review-card-name'>{props.name}</div>
        <div>{props.star} stars</div>
        <div className='review-card-text'>{props.content}</div>
      </div>
    </div>
  )
}
export default SingleReview
