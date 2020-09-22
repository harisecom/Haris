import React from 'react';
import MainSlider from './Slider/MainSlider.component';
import './homepage.style.css';
import MainContent from './MainContent/MainContent';
import Footer from '../../Components/Footer/Footer.component';


const Homepage = () => {

        return ( 
            <div>
                
                <MainSlider />
                

                <MainContent />
                <Footer />
                
                
                
            </div>
            
            );
    }
   
 
export default Homepage;