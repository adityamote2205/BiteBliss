import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import { useNavigate } from 'react-router-dom';

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const {restaurants} = useContext(RestaurantsContext);
  const [name,setName] = useState("");
  const [location,setLocation] = useState("");
  const [priceRange,setPriceRange] = useState("");

  useEffect(()=>{
    const fetchData = async () => {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response.data.data);
        setName(response.data.data.restaurant.name);
        setLocation(response.data.data.restaurant.location);
        setPriceRange(response.data.data.restaurant.price_range);

    };
    fetchData();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateRestaurant = await RestaurantFinder.put(`/${id}`,{
        name,
        location,
        price_range : priceRange,
    });
    navigate("/");
  };


  return (
    <div>
      <form action=''>
        <div className="form-group mb-4">
          <label htmlFor="name" style={{ fontFamily: 'Arial', fontSize: '16px' }}>Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} id="name" className="form-control mt-2" type="text" style={{ fontFamily: 'Arial', fontSize: '16px' }} />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="location" style={{ fontFamily: 'Arial', fontSize: '16px' }}>Location</label>
          <input value={location} onChange={e=>setLocation(e.target.value)} id="location" className="form-control mt-2" type="text" style={{ fontFamily: 'Arial', fontSize: '16px' }} />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="price_range" style={{ fontFamily: 'Arial', fontSize: '16px' }}>Price Range</label>
          <input value={priceRange} onChange={e=>setPriceRange(e.target.value)} id="price_range" className="form-control mt-2" type="number" min="1" max="5" style={{ fontFamily: 'Arial', fontSize: '16px' }} />
          <small className="form-text text-muted">Enter a number between 1 and 5.</small>
        </div>
        <button type='submit' onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
