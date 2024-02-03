import React, {useState, useEffect} from 'react';
import '../styles/Ranking.css';
import BathroomCard from '../components/BathroomCard';

import library2ndFloor from "../images/lib 2nd floor.jpg";
import centerpointbathroom from "../images/Centerpointe_1.jpg";
import srcbathroom from "../images/SRC_1.jpg";
import bld3_bathroom from "../images/bld3_secondfloor.jpg";
import bld4_bathroom from "../images/bld4_bathroom.jpg";
import bld5_bathroom from "../images/bld5_bathroom.jpg";
import bld6_bathroom from "../images/bld6_bathroom.jpg";
import bld163_bathroom from "../images/bld163_firstfloor.jpg";
import engineering_bathroom from "../images/engineering_bathroom.jpg";
import music_bathroom from "../images/Music_bathroom.jpg";
import business_bathroom from "../images/admin_building.jpg";
import tempclass_bathroom from "../images/tempclass_bathroom.jpg";


const Ranking = () => { 

  const bathrooms = [
    {location: "Library 2nd Floor", upvotes: 0, image: library2ndFloor}, 
    {location: "Centerpointe", upvotes: 0, image: centerpointbathroom}, 
    {location: "SRC Bathroom", upvotes: 0, image: srcbathroom},
    {location: "Building 3, 2nd floor", upvotes: 0, image: bld3_bathroom},
    {location: "Building 4, 1st floor", upvotes: 0, image: bld4_bathroom},
    {location: "Building 5, 1st floor", upvotes: 0, image: bld5_bathroom},
    {location: "Building 6,  1st floor", upvotes: 0, image: bld6_bathroom},
    {location: "Building 163, 1st floor", upvotes: 0, image: bld163_bathroom},
    {location: "Building 9, 1st floor", upvotes: 0, image: engineering_bathroom},
    {location: "Music Building 24, 1st floor", upvotes: 0, image: music_bathroom},
    {location: "Business & Administration building", upvotes: 0, image: business_bathroom},
    {location: "Temporary Classrooms", upvotes: 0, image: tempclass_bathroom},
    ];

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
