import React from 'react';
import '../App.css';

// House Images
import House1 from '../../../public/img/house-1.jpeg';
import House2 from '../../../public/img/house-2.jpeg';
import House3 from '../../../public/img/house-3.jpeg';
import House4 from '../../../public/img/house-4.jpeg';
import House5 from '../../../public/img/house-5.jpeg';
import House6 from '../../../public/img/house-6.jpeg';

const Homes = () => {
  return (
    <section className='homes'>
      <div className='home'>
        <img src={House1} className='home__img' alt='house1' />
        <span className='home__like'>
          <i class="far fa-star"></i>
        </span>
        <h5 className='home__name'>Beautiful Family House</h5>
        <div className='home__location'>
          <span>
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <p>USA</p>
        </div>
        <div className='home__rooms'>
          <span>
            <i class="fas fa-users"></i>
          </span>
          <p>5 rooms</p>
        </div>
        <div className='home__area'>
          <span>
            <i class="fas fa-expand-arrows-alt"></i>
          </span>
          <p>325 sq<sup>m</sup></p>
        </div>
        <div className='home__price'>
          <span>
            <i class="fas fa-key"></i>
          </span>
          <p>$1,200,000</p>
        </div>
        <button className='btn home__btn'>Contact Realtor</button>
      </div>

      <div className='home'>
        <img src={House2} className='home__img' alt='house2' />
        <span className='home__like'>
          <i class="far fa-star"></i>
        </span>
        <h5 className='home__name'>Modern Glass Villa</h5>
        <div className='home__location'>
          <span>
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <p>Canada</p>
        </div>
        <div className='home__rooms'>
          <span>
            <i class="fas fa-users"></i>
          </span>
          <p>6 rooms</p>
        </div>
        <div className='home__area'>
          <span>
            <i class="fas fa-expand-arrows-alt"></i>
          </span>
          <p>450 sq<sup>m</sup></p>
        </div>
        <div className='home__price'>
          <span>
            <i class="fas fa-key"></i>
          </span>
          <p>$2,750,000</p>
        </div>
        <button className='btn home__btn'>Contact Realtor</button>
      </div>

      <div className='home'>
        <img src={House3} className='home__img' alt='house3' />
        <span className='home__like'>
          <i class="far fa-star"></i>
        </span>
        <h5 className='home__name'>Cozy Country House</h5>
        <div className='home__location'>
          <span>
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <p>UK</p>
        </div>
        <div className='home__rooms'>
          <span>
            <i class="fas fa-users"></i>
          </span>
          <p>4 rooms</p>
        </div>
        <div className='home__area'>
          <span>
            <i class="fas fa-expand-arrows-alt"></i>
          </span>
          <p>250 sq<sup>m</sup></p>
        </div>
        <div className='home__price'>
          <span>
            <i class="fas fa-key"></i>
          </span>
          <p>$850,000</p>
        </div>
        <button className='btn home__btn'>Contact Realtor</button>
      </div>

      <div className='home'>
        <img src={House4} className='home__img' alt='house4' />
        <span className='home__like'>
          <i class="far fa-star"></i>
        </span>
        <h5 className='home__name'>Large Rustical Villa</h5>
        <div className='home__location'>
          <span>
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <p>Portugal</p>
        </div>
        <div className='home__rooms'>
          <span>
            <i class="fas fa-users"></i>
          </span>
          <p>6 rooms</p>
        </div>
        <div className='home__area'>
          <span>
            <i class="fas fa-expand-arrows-alt"></i>
          </span>
          <p>480 sq<sup>m</sup></p>
        </div>
        <div className='home__price'>
          <span>
            <i class="fas fa-key"></i>
          </span>
          <p>$1,950,000</p>
        </div>
        <button className='btn home__btn'>Contact Realtor</button>
      </div>

      <div className='home'>
        <img src={House5} className='home__img' alt='house5' />
        <span className='home__like'>
          <i class="far fa-star"></i>
        </span>
        <h5 className='home__name'>Majestic Palace Home</h5>
        <div className='home__location'>
          <span>
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <p>GERMANY</p>
        </div>
        <div className='home__rooms'>
          <span>
            <i class="fas fa-users"></i>
          </span>
          <p>18 rooms</p>
        </div>
        <div className='home__area'>
          <span>
            <i class="fas fa-expand-arrows-alt"></i>
          </span>
          <p>4,230 sq<sup>m</sup></p>
        </div>
        <div className='home__price'>
          <span>
            <i class="fas fa-key"></i>
          </span>
          <p>$9,500,000</p>
        </div>
        <button className='btn home__btn'>Contact Realtor</button>
      </div>

      <div className='home'>
        <img src={House6} className='home__img' alt='house6' />
        <span className='home__like'>
          <i class="far fa-star"></i>
        </span>
        <h5 className='home__name'>Modern Family Apartment</h5>
        <div className='home__location'>
          <span>
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <p>ITALY</p>
        </div>
        <div className='home__rooms'>
          <span>
            <i class="fas fa-users"></i>
          </span>
          <p>3 rooms</p>
        </div>
        <div className='home__area'>
          <span>
            <i class="fas fa-expand-arrows-alt"></i>
          </span>
          <p>180 sq<sup>m</sup></p>
        </div>
        <div className='home__price'>
          <span>
            <i class="fas fa-key"></i>
          </span>
          <p>$600,000</p>
        </div>
        <button className='btn home__btn'>Contact Realtor</button>
      </div>
    </section>
  )
}

export default Homes;
