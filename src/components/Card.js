import React from 'react';
import CardItem from './CardItem';
import { Element } from 'react-scroll';
import './Card.css';
import CustomLight from '../assets/images/miniature-house-model-with-house-layout-plan-2022-12-16-12-28-27-utc.JPG';
import LightInstall from '../assets/images/Christmas-Lights-1-scaled-e1666114947725-497x373.jpeg';
import CarWax from '../assets/images/Dv6XPG273KLwXtZPXue4sT-1600-80.jpg.webp';
import WheelPolish from '../assets/images/694x463OutletsinOutlets.png';
import Timer from '../assets/images/iStock-1193535068-prevent-christmas-light-decor-light-timer-650x432.webp'
import Dusting from '../assets/images/iStock-461162955_res.jpg'
import Shampoo from '../assets/images/the-hop-exchange-london-bridge-southwark-london-christmas-5-648x432.jpg'

function Card() {
  return (
    <Element id='services'>
      <div className='cards bg-white w-full pt-10'>
        <h1 className="home-h1">Check out Our <span className="font-bold text-2xl underline span" >Premium</span> <br></br>  Lighting Services</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={CustomLight}
                text='Crafting a unique lighting design to complement the architecture of your home and your personal tastes.'
                label='Custom Light Design'
                path='/light-medic/contact'
              />
              <CardItem
                src={LightInstall}
                text='Safely installing Christmas lights on roofs, trees, and around your windows and other structures.'
                label='Light Installation'
                path='/light-medic/contact'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src={CarWax}
                text='Supplying high-quality, energy-efficient lighting materials and decorations to brighten your home.'
                label='Lighting Material Supply'
                path='/light-medic/contact'
              />
              <CardItem
                src={WheelPolish}
                text='Ensuring the electrical load of the lights is safe and within the capacity of your home’s electrical system.'
                label='Electrical Safety Assessment'
                path='/light-medic/contact'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src={Timer}
                text='Configuring timers to automate the turning on and off of lights, saving energy and adding convenience for you.'
                label='Timer Setup'
                path='/light-medic/contact'
              />
              <CardItem
                src={Dusting}
                text='Carefully taking down the lights at the end of the season and providing storage solutions if you need them.'
                label='Removal and Storage'
                path='/light-medic/contact'
              />
            </ul>
          </div>
        </div>
      </div>

      
      <div className='cards elite bg-white w-full'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            
            <ul className='cards__items'>
              <CardItem
                src={Shampoo}
                text='Offering services to local businesses to brighten up their storefronts during the festive season.'
                label='Commercial Lighting Installation'
                path='/light-medic/contact'
              />
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Card;
