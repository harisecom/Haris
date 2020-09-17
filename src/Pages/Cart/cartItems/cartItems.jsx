import React from 'react';
import './cartItems.style.css';

const CartItems = () => {
    return ( 
        <div className="cart-item">
            <div className="cart-item-image">
                <img src="/images/cart-item-example.png" alt=""/>
            </div>
            <div className="cart-item-texts">
                <div className="cart-item-info">
                    <h1>Then I Met You</h1>
                    <p>The Skin Balancing Duo</p>
                    <div className="cart-item-remove">
                        <span>Remove</span>
                    </div>
                </div>
                <div className="cart-item-quantity">
                    <input type="text" defaultValue='1' />
                </div>
                <div className="cart-item-price">
                    <span>$78</span>
                </div>
                
            </div>
        </div>
     );
}
 
export default CartItems;