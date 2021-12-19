import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../App.css';

const Features = () => {

  const [ features, setFeatures ] = useState([]);

  useEffect(() => {
    const axiosGet = async () => {
      const response = await axios.get('http://localhost:3001/api/v1/features'); 
      setFeatures(response.data);
    }
    axiosGet();
  }, []);

  try {
    if (features) {

      console.log('Data loaded!');
      console.log('features: ', features.data);
      console.log('Keys: ', Object.keys(features.data));
      console.log('Values: ', Object.values(features.data));

      const featureArray = Object.values(features.data).map(feature => (
        <div key={feature.id}>{feature.heading}</div>
      ))
      featureArray
    }
  } catch (err) {
    console.error('Error: ', err.message);
  }
   
  return (
    <section className='features'>
      <div className='feature'>
        <span className='feature__icon'><i className="fas fa-globe"></i></span>
        <h4 className='heading-4 heading-4--dark'>World's best luxury homes</h4>
        <p className='feature__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
      </div>
      <div className='feature'>
        <span className='feature__icon'><i className="fas fa-trophy"></i></span>
        <h4 className='heading-4 heading-4--dark'>Only the best properties</h4>
        <p className='feature__text'>Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
      </div>
      <div className='feature'>
        <span className='feature__icon'><i className="fas fa-map-pin"></i></span>
        <h4 className='heading-4 heading-4--dark'>All homes in top locations</h4>
        <p className='feature__text'>Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
      </div>
      <div className='feature'>
        <span className='feature__icon'><i className="fas fa-key"></i></span>
        <h4 className='heading-4 heading-4--dark'>New home in one week</h4>
        <p className='feature__text'>Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='feature'>
        <span className='feature__icon'><i className="fas fa-chart-line"></i></span>
        <h4 className='heading-4 heading-4--dark'>Top 1% realtors</h4>
        <p className='feature__text'>Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
      </div>
      <div className='feature'>
        <span className='feature__icon'><i className="fas fa-lock"></i></span>
        <h4 className='heading-4 heading-4--dark'>Secure payments on nexter</h4>
        <p className='feature__text'>Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
      </div>
    </section>
  )
}

export default Features;
