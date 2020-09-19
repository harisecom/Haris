import React from 'react';
import CartItems from './cartItems/cartItems';
import './cart.style.css';
import { connect } from 'react-redux';

const Cart = ({cartStatus}) => {

    return ( 
        <div className={`cart ${ cartStatus === true ? 'active' : ''} `} >
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

const mapStateToProps = ({cart}) => ({
    cartStatus : cart.cartStatus
})

 
export default connect(mapStateToProps)(Cart);