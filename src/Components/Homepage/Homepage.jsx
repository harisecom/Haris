import React, { Component } from 'react';
import Header from '../Header/Header';
import MainSlider from './Slider/MainSlider.component';
import Cart from '../Cart/Cart';
import './homepage.style.css';
import MainContent from './MainContent/MainContent';

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state ={
            'cartStatus' : 'close'
        }

    }

    handleCart = () =>{
        switch (this.state.cartStatus){
            case 'active':
                this.setState({ cartStatus : 'close'});
                break;

            case 'close':
                this.setState({ cartStatus: 'active'});
                break;
        
            default:
                break;
        }
    }
    render(){
        return ( 
            <div>
                <Header handleCart={this.handleCart} />
                <MainSlider />
                <Cart cartStatus={this.state.cartStatus} />
                { this.state.cartStatus === 'active' ?
                <div className="cartOpen" onClick={() => this.setState({ cartStatus: 'close'})}></div> :
                null
                }
                <MainContent />
                
                
                
                
            </div>
            
            );
        }
    }
   
 
export default Homepage;