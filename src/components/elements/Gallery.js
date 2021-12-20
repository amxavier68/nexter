import React from 'react';
import '../App.css';

import GalPic1 from '../../../public/img/gal-1.jpeg';
import GalPic2 from '../../../public/img/gal-2.jpeg';
import GalPic3 from '../../../public/img/gal-3.jpeg';
import GalPic4 from '../../../public/img/gal-4.jpeg';
import GalPic5 from '../../../public/img/gal-5.jpeg';
import GalPic6 from '../../../public/img/gal-6.jpeg';
import GalPic7 from '../../../public/img/gal-7.jpeg';
import GalPic8 from '../../../public/img/gal-8.jpeg';
import GalPic9 from '../../../public/img/gal-9.jpeg';
import GalPic10 from '../../../public/img/gal-10.jpeg';
import GalPic11 from '../../../public/img/gal-11.jpeg';
import GalPic12 from '../../../public/img/gal-12.jpeg';
import GalPic13 from '../../../public/img/gal-13.jpeg';
import GalPic14 from '../../../public/img/gal-14.jpeg';

const Gallery = () => {
  return (
    <section className='gallery'>
      <figure className='gallery__item gallery__item--1'>
        <img src={GalPic1} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--2'>
        <img src={GalPic2} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--3'>
        <img src={GalPic3} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--4'>
        <img src={GalPic4} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--5'>
        <img src={GalPic5} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--6'>
        <img src={GalPic6} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--7'>
        <img src={GalPic7} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--8'>
        <img src={GalPic8} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--9'>
        <img src={GalPic9} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--10'>
        <img src={GalPic10} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--11'>
        <img src={GalPic11} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--12'>
        <img src={GalPic12} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--13'>
        <img src={GalPic13} className='gallery__img' alt='gallery' />
      </figure>
      <figure className='gallery__item gallery__item--14'>
        <img src={GalPic14} className='gallery__img' alt='gallery' />
      </figure>
    </section>
  )
}

export default Gallery;
