import React, {useState, useEffect} from 'react';

import '../styles/Ranking.css';

import BathroomCard from '../components/BathroomCard';

const Ranking = () => { 

  const bathrooms = [{location: "location 1", upvotes: 8}, {location: "location 2", upvotes: 2}]
  
  // const [bathrooms, setBathrooms] = useState([]);

  // useEffect(() => {
    // Fetch data from the API
  //   fetch('http://localhost:3000/restroom/')
  //     .then(response => response.json())
  //     .then(data => setBathrooms(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div>
      <h1>RANKING</h1>
      <ul>
        {bathrooms.map((bathroom) => <BathroomCard title={bathroom.location} numUpvotes={bathroom.upvotes}/>)}
      </ul>
    </div>
  );
};

export default Ranking;
