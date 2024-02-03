import React from 'react';

import '../styles/Ranking.css';

import BathroomCard from '../components/BathroomCard';

const Ranking = () => { 

  const bathrooms = [{location: "location 1", upvotes: 8}, {location: "location 2", upvotes: 2}]
  

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
