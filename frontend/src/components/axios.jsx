import React, { useState, useEffect } from 'react';

function RestroomComponent() {
  const [restroomData, setRestroomData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRestroomData();
  }, []);

  const fetchRestroomData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/restroom/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setRestroomData(data);
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
      {restroomData ? (
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
