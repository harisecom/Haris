import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import MainSlider from './Slider/MainSlider.component';
import Cart from '../Cart/Cart';
import './homepage.style.css';
import ProductCard from '../../Components/ProductCard/ProductCard';
import MainContent from './MainContent/MainContent';
import Footer from '../../Components/Footer/Footer.component';
import { useStateValue } from '../../State/StateProvider';
import {Products} from '../../Data/Products';

const Homepage = () => {
       
        const [{ cartStatus } , dispatch] = useStateValue();

        return ( 
            <div>
                
                <MainSlider />
                

                <MainContent />
                <Footer />
                
                
                
            </div>
            
            );
    }
   
 
export default Homepage;