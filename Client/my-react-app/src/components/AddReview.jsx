import React, { useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { useParams,useNavigate, useLocation } from 'react-router-dom';

const AddReview = () => {
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [name ,setName] = useState("");
    const [rating ,setRating] = useState("Rating");
    const [reviewText ,setReviewText] = useState("");

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        try{

            const response = await RestaurantFinder.post(`/${id}/addReview`, {  // Include the addReview endpoint
                name,
                review: reviewText,
                rating,
            });

            navigate("/");
            navigate(location.pathname);



        } catch (err) {

        }
    };

  return (
    <div className='mb-4'>
      <form>
        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='name' className='mb-2'>Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} id='name' placeholder='Name' type='text' className='form-control' />
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='rating' className='mb-2 d-block'>Rating</label>
            <select value={rating} onChange={(e)=>setRating(e.target.value)}  id='rating' className='custom-select rounded' style={{ height: '2.25rem', width: '100%', fontSize: '0.85rem', padding: '0.3rem 0.6rem', border: '1px solid #ced4da' }}>
              <option disabled>Rating</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 mb-3'>
            <label htmlFor='review' className='mb-2'>Review</label>
            <textarea value={reviewText} onChange={(e)=>setReviewText(e.target.value)}  id='review' className='form-control rounded' rows='5'></textarea>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <button  onClick={handleSubmitReview} type='submit' className='btn btn-primary'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
