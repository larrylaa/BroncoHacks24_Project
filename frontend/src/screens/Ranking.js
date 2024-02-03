import React, {useState, useEffect} from 'react';
import '../styles/Ranking.css';
import BathroomCard from '../components/BathroomCard';

import library2ndFloor from "../images/lib 2nd floor.jpg";



const Ranking = () => { 

  const bathrooms = [{location: "Library 2nd Floor", upvotes: 0, image: library2ndFloor}, {location: "location 2", upvotes: 0}]
  // const [bathrooms, setBathrooms] = useState({});


  // useEffect(() => {

  //   axios.get('http://localhost:3000/bathrooms')
  //     .then(response => {
  //       setBathrooms(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <div>
      <h1 className='ranking-header'>Rankings</h1>
      <ul>
        {bathrooms.map((bathroom) => <BathroomCard title={bathroom.location} numUpvotes={bathroom.upvotes} source={bathroom.image}/>)}
      </ul>
    </div>
  );
};

export default Ranking;
