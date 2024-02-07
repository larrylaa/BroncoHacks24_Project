import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Ranking.css';
import BathroomCard from '../components/BathroomCard';

const Ranking = () => {
  const [bathrooms, setBathrooms] = useState([]);

  useEffect(() => {
    const fetchBathrooms = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/restroom/');
        setBathrooms(response.data);
      } catch (error) {
        console.error('Error fetching bathrooms:', error);
      }
    };

    fetchBathrooms();
  }, []);

  return (
    <div>
      <h1 className='ranking-header'>Rankings</h1>
      <ul>
        {bathrooms.map((bathroom, index) => (
          <BathroomCard
            key={index} // Use a unique key for each item, you can use index here but ideally, you should use a unique identifier from your data
            title={bathroom.location}
            numUpvotes={bathroom.upvotes}
            source={bathroom.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
