import React from 'react';
import StarRating from './StarRating';

const Reviews = ({reviews}) => {
  return (
    <div className='row row-cols-1 row-cols-md-3 mb-2'>
       {reviews.map((review)=>{
            return (

                <div key={review.id} className='col-4'>
        <div className='card text-white bg-primary mb-3' style={{maxWidth:"100%"}}>
            <div className='card-header d-flex justify-content-between'>
                <span>{review.name}</span>
                <span><StarRating rating={review.rating} /></span>
            </div>
            <div className='card-body'>
                <p className='card-text'>{review.review}</p> 
            </div>
        </div>
      </div>

            )
       })}
      {/* <div className='col-4'>
        <div className='card text-white bg-primary mb-3' style={{maxWidth:"100%"}}>
            <div className='card-header d-flex justify-content-between'>
                <span>Aditya</span>
                <span><StarRating rating={1} /></span>
            </div>
            <div className='card-body'>
                <p className='card-text'>Good restaurant</p> 
            </div>
        </div>
      </div>

      <div className='col-4'>
        <div className='card text-white bg-primary mb-3' style={{maxWidth:"100%"}}>
            <div className='card-header d-flex justify-content-between'>
                <span>Aditya</span>
                <span><StarRating rating={4} /></span>
            </div>
            <div className='card-body'>
                <p className='card-text'>Good restaurant</p> 
            </div>
        </div>
      </div>

      <div className='col-4'>
        <div className='card text-white bg-primary mb-3' style={{maxWidth:"100%"}}>
            <div className='card-header d-flex justify-content-between'>
                <span>Aditya</span>
                <span><StarRating rating={3.4} /></span>
            </div>
            <div className='card-body'>
                <p className='card-text'>Good restaurant</p> 
            </div>
        </div>
      </div>

      <div className='col-4'>
        <div className='card text-white bg-primary mb-3' style={{maxWidth:"100%"}}>
            <div className='card-header d-flex justify-content-between'>
                <span>Aditya</span>
                <span><StarRating rating={1.2} /></span>
            </div>
            <div className='card-body'>
                <p className='card-text'>Good restaurant</p> 
            </div>
        </div>
      </div>

      <div className='col-4'>
        <div className='card text-white bg-primary mb-3' style={{maxWidth:"100%"}}>
            <div className='card-header d-flex justify-content-between'>
                <span>Aditya</span>
                <span><StarRating rating={0.5} /></span>
            </div>
            <div className='card-body'>
                <p className='card-text'>Good restaurant</p> 
            </div>
        </div>
      </div> */}
    </div>
  );
}

export default Reviews;
