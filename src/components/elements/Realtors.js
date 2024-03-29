import React from 'react';
import '../App.css';

// Image Handling
import Realtor1 from '../../../public/img/realtor-1.jpeg';
import Realtor2 from '../../../public/img/realtor-2.jpeg';
import Realtor3 from '../../../public/img/realtor-3.jpeg';

const Realtors = () => {
  return (
    <div className='realtors'>
      <h3 className='heading-3'>Top 3 Realtors</h3>
      <div className='realtors__list'>
        <img src={Realtor1} className='realtors__img' alt="realtor 1" />
        <div className='realtors__details'>
          <h4 className='heading-4 heading-4--light'>Erik Feirman</h4>
          <p className="realtors__sold">245 houses sold</p>
        </div>
        <img src={Realtor2} className='realtors__img' alt="realtor 2" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Kim Brown</h4>
          <p className="realtors__sold">212 houses sold</p>
        </div>
        <img src={Realtor3} className='realtors__img' alt="realtor 3" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
          <p className="realtors__sold">198 houses sold</p>
        </div>
      </div>
    </div>
  )
}

export default Realtors;


