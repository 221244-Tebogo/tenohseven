//import { useState, useEffect } from 'react';
import '../index.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselHero() {
  return (
    <Carousel fade>
      <div className='Carousel'>
        <img
          className="Carousel-slider"
          src="https://images.pexels.com/photos/3045245/pexels-photo-3045245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 tagline>Track your growth with analytics</h1>
          <p>Save Time and Money with our automated reporting and monitoring tools.</p>
        <button onClick={() =>console.log('loading...')}>Growth Path</button>
        </Carousel.Caption>
      </div>
      <Carousel.Item>
        <img
          className="Carousel-slider"
          src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Graphic Design Services</h1>
          <p>Start connecting with your clients today!.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHero;