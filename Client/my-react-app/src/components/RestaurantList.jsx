import React,{useContext, useEffect} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';


const RestaurantList = (props) => {

  const {restaurants,setRestaurants} = useContext(RestaurantsContext);
  let navigate = useNavigate();
  useEffect(()=>{
    const fetchData = async () =>{
      try {

        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurant);

      } catch (err) {
        console.log("error");
      }
    };

    fetchData();
     
  },[]);

  const handleDelete = async (event,id) => {
    event.stopPropagation();
     try {

      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant)=>{
          return restaurant.id != id;
        })
      );
     } catch (err) {
      console.log(err);
     }
  }

  const handleUpdate = (event,id) => {
    event.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  }

  const handleRestaurantSelect = (id) =>{
    navigate(`/restaurants/${id}`);
  }

  const renderRating = (element) => {
    if(!element.count) 
    {
      return <span className='text-warning'>0 reviews</span>
    }
    return (
      <>
      <StarRating rating={element.average_rating}/>
    <span className='text-warning ml-1'>({element.count})</span>
      </>
    )
  }

  return (
    <div className="list-group mt-2">
    <table className="table table-hover table-dark table-striped custom-table">
      <thead>
        <tr className="bg-primary text-white">
          <th scope="col">Restaurant</th>
          <th scope="col">Location</th>
          <th scope="col">Price Range</th>
          <th scope="col">Ratings</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
      {restaurants && restaurants.map(element =>{
        return (
        <tr onClick={()=>handleRestaurantSelect(element.id)} key={element.id}>
          <td>{element.name}</td>
          <td>{element.location}</td>
          <td>{"₹".repeat(element.price_range)}</td>
          <td>{renderRating(element)}</td>
          <td><button onClick={(event)=>{handleUpdate(event,element.id)}} className="btn btn-warning btn-sm">Update</button></td>
          <td><button onClick={(event)=>handleDelete(event,element.id)} className="btn btn-danger btn-sm">Delete</button></td>
        </tr> 
        )
      })}
        {/* <tr>
          <td>Izumi</td>
          <td>Bandra West</td>
          <td>₹₹₹₹</td>
          <td>Ratings</td>
          <td><button className="btn btn-warning btn-sm">Update</button></td>
          <td><button className="btn btn-danger btn-sm">Delete</button></td>
        </tr>
        <tr>
          <td>Taj Hotel</td>
          <td>Colaba</td>
          <td>₹₹₹₹₹</td>
          <td>Ratings</td>
          <td><button className="btn btn-warning btn-sm">Update</button></td>
          <td><button className="btn btn-danger btn-sm">Delete</button></td>
        </tr>
        <tr>
          <td>Anand Bhavan</td>
          <td>Matunga West</td>
          <td>₹</td>
          <td>Ratings</td>
          <td><button className="btn btn-warning btn-sm">Update</button></td>
          <td><button className="btn btn-danger btn-sm">Delete</button></td>
        </tr>
        Add more rows as needed */}
      </tbody>
    </table>
  </div>
  );
};

export default RestaurantList;
