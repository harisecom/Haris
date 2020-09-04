import React, { useState } from 'react';
import './ProductDetails.styles.css'

const ProductDetails = () => {
    const [activeMenu, setActiveMenu] = useState("details");
    const menuOnClick =  (e) => {
        const target = e.target.id;
        setActiveMenu(target);
    }

    return(
        <div className="product-detail container">
            <div className="image">
                <div className="side-images">
                    <img alt="side-1" className="side-image" src="https://media.glamour.com/photos/5cc9bd1080911dec300bc131/3:2/w_1800,h_1200,c_limit/0501_nomakeup_river.jpg"></img>
                    <img alt="side-2" className="side-image" src="https://media.glamour.com/photos/5cc9bd1080911dec300bc131/3:2/w_1800,h_1200,c_limit/0501_nomakeup_river.jpg"></img>
                    <img  alt="side-3" className="side-image" src="https://media.glamour.com/photos/5cc9bd1080911dec300bc131/3:2/w_1800,h_1200,c_limit/0501_nomakeup_river.jpg"></img>
                </div>
                <div className="product-image-main">
                    <div className="product-image-name"><span>The Skin Balancing Duo &nbsp; </span>  /  <span className="emphasis">&nbsp;  The Skin Balancing Duo</span></div>
                    <img alt="product" className="image-main" src="https://media.glamour.com/photos/5cc9bd1080911dec300bc131/3:2/w_1800,h_1200,c_limit/0501_nomakeup_river.jpg"></img>
                    <div className="arrows">
                        <i className="fas fa-arrow-left fa-2x"></i>
                        <i className="fas fa-arrow-right fa-2x"></i>
                    </div>
                </div>
            </div>
            <div className="second-half">
                <h2>GOOD (SKIN) DAYS™</h2>
                <div className="section">
                    <h5>The Skin Balancing Duo</h5>
                    <h5>$58</h5>
                </div>
                <div className="reviews">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="review-number">(20 Reviews)</span>
                </div>

                <div className="navbar menu">
                    <a  onClick={menuOnClick} className={`${activeMenu === "details" ? "active-menu" : '' } menu-item`} id="details">Details</a>
                    <a onClick={menuOnClick}  className={`${activeMenu === "ingredients" ? "active-menu" : '' } menu-item`}  id="ingredients">Ingredients</a>
                    <a onClick={menuOnClick}  className={`${activeMenu === "how-to-use" ? "active-menu" : '' } menu-item`} id="how-to-use">How to use</a>
                    <a onClick={menuOnClick}  className={`${activeMenu === "share" ? "active-menu" : '' } menu-item`} id="share">Share</a>
                </div>
                <hr className="line-below-nav"></hr>
                <div  className={`${activeMenu === "details" ? "active-paragraph" : 'hidden' }`}>
                <p>Do more for your skin by incorporating this hydrating, low pH (4.5) cleansing toner into your daily regimen. The formula is enriched with maple extract — known for its antioxidant and skin softening properties — as well as.</p>
                <p>anti-inflammatory that soothes and nourishes. The inclusion of natural pumpkin and papaya enzymes help gently exfoliate skin and remove impurities. After using, skin feels heathy, hydrated, clean, and balanced.</p>
                </div>
                <div  className={`${activeMenu === "ingredients" ? "active-paragraph" : 'hidden' }`} >ingredients</div>
                <div className={`${activeMenu === "how-to-use" ? "active-paragraph" : 'hidden' }`}>how-to-use</div>
                <div  className={`${activeMenu === "share" ? "active-paragraph" : 'hidden' }`}>share</div>
                <div className="add-to-bag">
                    <div className="quantity-section">
                        <i className="fas fa-minus"></i>
                        <span className="quantity">1</span>
                        <i className="fas fa-plus"></i>
                    </div>
                    <button className="addButton">Add to Bag</button>
                    <div>
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductDetails;