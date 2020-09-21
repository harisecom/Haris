import React, { Component } from 'react';
import './main-content.style.css';
import ProductCard from '../../../Components/ProductCard/ProductCard.component';
import {Products} from '../../../Data/Products';

class MainContent extends Component {

  constructor(){
    super();
    this.state = {
      bestDeals: []
    }

  }

  componentDidMount(){
    const bestDeals = Products.filter((item) => item.title === 'Best Deals');
    this.setState({bestDeals: bestDeals})
    
  }
  

    
    
 render(){
  return (
    <div>
      <div className="main-text">
        <h1>START YOUR SKIN CARE JOURNEY</h1>
        <p>
          Skin care is a personal journey and we are here to guide you along the way <br/>
          Trusted to bring you FDA-approved, authentic products since 2012.
        </p>
      </div>

      <div className="shop-by-category">
        <ul>
          <li className="selected">SHOP BY BEST DEALS</li>
          <li>SHOP BY BEST SHOPS</li>
          <li>SHOP BY BEST SELLS</li>
        </ul>
        <div className="populate-shop-items">

        <div className="best-deals">
        {
          this.state.bestDeals.length !== 0 ?

          this.state.bestDeals[0]['items'].map((product, key) =>(
            <ProductCard key={key} product={product}/>
          )) :
          null
          
        }
        </div>
           
          </div>
      </div>
        <div className="banner-promo-component">
          <div className="banner-promo-section">
              <div className="banner-text-content">
                  <h3>DEVELOPED BY HARIS LABS</h3>
                  <h1>GOOD (SKIN) DAYS</h1>
                  <p>Committed to approachable, effective formulation that <br/>
                  are designed with you and your skin care journey in mind.
                  </p>
                  <button> SHOP NOW</button>
              </div>
              <div className="banner-image-content">
                  <img src="/images/banner-image-content.png" alt=""/>
              </div>
          </div>
        </div>

        <div className="currently-trending">
            <h1>CURRENTLY TRENDING</h1>

        </div>

        <div className="newly-added">
            <h1>NEWLY ADDED</h1>
        </div>
        <div className="newslater-subscription">
            <p>Sign up for subscriber-only discounts, first look at <br/>
             newly-curated items & K-beuty skincare tips! </p>
            <input type="text" placeholder="Your Email..."/>
        </div>
    </div>
  )
 }
  
}

export default MainContent;
