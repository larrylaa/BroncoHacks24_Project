import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RestroomComponent() {
  const [restroomData, setRestroomData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRestroomData();
  }, []);

  const fetchRestroomData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/restroom/');
      setRestroomData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {restroomData.length > 0 ? (
        <div>
          <h2>Restroom Data</h2>
          <ul>
            {restroomData.map((restroom, index) => (
              <li key={index}>
                {restroom.name}: {restroom.description}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No restroom data available</div>
      )}
    </div>
  );
}

export default RestroomComponent;
