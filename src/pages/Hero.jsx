import React from 'react';
import img1 from './../assets/img1.png';
import Navbar from './../components/Navbar';
const Hero = () => {
    return (
      <div>
        <h1></h1>
        <Navbar/>
        <div>
            <img src={img1} alt="" />
            <img src="" alt="" />
        </div>
      </div>
    );
};

export default Hero;