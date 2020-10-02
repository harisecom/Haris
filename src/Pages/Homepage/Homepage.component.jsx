import React from 'react';
import MainSlider from './Slider/MainSlider.component';
import './homepage.style.css';
import MainContent from './MainContent/MainContent.content';

const Homepage = () => {
    return ( 
        <div> 
            <MainSlider />
            <MainContent />
        </div>
    );
}
   
export default Homepage;