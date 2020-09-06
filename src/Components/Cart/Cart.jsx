import React from 'react';
import CartItems from './cartItems/cartItems';
import './cart.style.css';

const Cart = (props) => {
    console.log(props.cartStatus);
    return ( 
        <div className={`cart ${ props.cartStatus === 'active' ? 'active' : ''}`} >
            <div className="cart-items">
                <CartItems/>
                <CartItems/>
            </div>

            <div className="cart-to-checkout">
                <h1 className="cart-total-price">Subtotal : $234</h1>
                <button className="cart-checkout-button">Checkout</button>
            </div>

        </div> 
        
        );
}
 
export default Cart;