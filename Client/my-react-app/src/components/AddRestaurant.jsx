import React, { useContext, useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
function AddRestaurant ()  {

  const{addRestaurants} = useContext(RestaurantsContext);

  const [name ,setName] = useState("");
  const [location ,setLocation] = useState("");
  const [priceRange ,setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {

       const response = await RestaurantFinder.post("/" , {
          name : name,
          location : location,
          price_range : priceRange
        });

        addRestaurants(response.data.data.restaurant);

        setName("");
        setLocation("");
        setPriceRange("Price Range");
        console.log(response.data.data);

        console.log(response);

      } catch(err) {

      }
  }
  
  return (
    <div className="mt-5 mb-4">
      <form action="">
        <div className="row justify-content-center">
          <div className="col-auto">
            <input value={name} onChange={e=>setName(e.target.value)} type="text" className="form-control rounded-pill placeholder-light" id="inputName" placeholder="Enter Restaurant name" />
          </div>
          <div className="col-auto">
            <input value={location} onChange={e=>setLocation(e.target.value)} type="text" className="form-control rounded-pill placeholder-light" id="inputLocation" placeholder="Enter Restaurant location" />
          </div>
          <div className="col-auto">
            <select value={priceRange} onChange={e=>setPriceRange(e.target.value)} className="form-select rounded-pill placeholder-light" id="inputCategory">
              <option disabled>Price Range</option>
              <option value="1">₹</option>
              <option value="2">₹₹</option>
              <option value="3">₹₹₹</option>
              <option value="4">₹₹₹₹</option>
              <option value="5">₹₹₹₹₹</option>
            </select>
          </div>
          <div className="col-auto">
            <button onClick={handleSubmit} type="submit" className="btn btn-primary px-4 rounded-pill">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
