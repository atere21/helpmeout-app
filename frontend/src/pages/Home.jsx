import React from 'react'
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Features from "../component/Features";
import Works from "../component/Works";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
    
         <Navbar/>
         <Hero/>
         <Features/>
         <Works/>
         <Footer/>
    </>
  )
}

export default Home