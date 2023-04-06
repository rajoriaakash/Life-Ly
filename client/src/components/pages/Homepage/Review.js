import React from 'react'
import { Link } from 'react-router-dom'
import SingleReview from './SingleReview'
import './review.css'
const Review = () => {
  const searchItem = [
    {
      id: 0,
      name: 'Vijay',
      star: '2',
      content:
        ' There is currently very little understanding of the influence of website quality on user behaviour. Future quality assessments might use the criteria informed by key behaviour change theories.'
    },
    {
      id: 1,
      name: 'Vijay',
      star: '2',
      content:
        ' There is currently very little understanding of the influence of website quality on user behaviour. Future quality assessments might use the criteria informed by key behaviour change theories.'
    },
    {
      id: 2,
      name: 'Vijay',
      star: '2',
      content:
        ' There is currently very little understanding of the influence of website quality on user behaviour. Future quality assessments might use the criteria informed by key behaviour change theories.'
    }
  ]
  return (
    <div id='review' className='review'>
      <div className='circle'></div><div className='circle2'></div>
      <div style={{ paddingTop: '4%' }} className='problem-div-que'>
        What people say about <span className='logo'>LifeLy</span>
      </div>
      <div className='review-card-outer'>
        {searchItem.map(ex => {
          return (
            <div className='review-card-outer-div'>
              <SingleReview key={ex.id} {...ex} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Review
