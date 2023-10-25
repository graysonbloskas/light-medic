import React from 'react';
import Image from '../assets/images/christmas-gift-boxes-festive-lights-santa-hat-an-2021-08-29-03-41-53-utc.JPG';
import { Element } from 'react-scroll';
import './Hero.css';

function Hero() {
  return (
    <Element to='hero' id="hero">
      <div className='h-screen bg-opacity-50 bg-black flex items-center justify-center contain' id="hero">
        <img src={Image} autoPlay loop muted className='bg-image' />
        <h1 className="hero-title">The Light Medic</h1>
        <p className="hero-text">Brightening Homes with Care and Flare</p>
      </div>
    </Element>
  );
}

export default Hero;
