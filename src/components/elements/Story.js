import React from 'react';

import '../App.css';

import Story1 from '../../../public/img/story-1.jpeg';
import Story2 from '../../../public/img/story-2.jpeg';

const Story = () => {
  return (
    <div className='story'>
      <div className='story__pictures'>
        <img src={Story1} className='story__img--1' alt='couple with new home' />
        <img src={Story2} className='story__img--2' alt='new home' />
      </div>

      <div className='story__content'>
        <h3 className='heading-3 mb-sm'>Happy Customers</h3>
        <h2 className='heading-2 heading-2--dark mb-md'>&ldquo;The best decision of our lives&rdquo;</h2>
        <p className='story__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!</p>
        <button className='btn'>Find your own home</button>
      </div>

    </div>
  )
}

export default Story;
