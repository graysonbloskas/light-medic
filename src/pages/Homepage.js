import React from 'react';  
import Hero from '../components/Hero'
import Card from '../components/Card'
import ContactPage from './ContactPage';

import '../App.css';
import './Homepage.css'

function Homepage() {
    return (
        <>
        <Hero />
        <Card />
        <ContactPage />
        </>
    )
}

export default Homepage
