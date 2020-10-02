import React from 'react';
import CartItems from './cartItems/CartItems.component';
import './cart.style.css';
import { connect } from 'react-redux';

const Cart = ({cartStatus, cartItems}) => {

    return ( 
        <div className={`cart ${ cartStatus === true ? 'active' : ''} `} >
            <div className="cart-items">
                {
                    cartItems.map( (item) => (
                        <CartItems item= {item}/>
                    ))
                }
            </div>

            <div className="cart-to-checkout">
            <h1 className="cart-total-price">Subtotal : $
            {
                cartItems.reduce((accumulator, item) => (
                    accumulator += (item.quantity * item.price)
                ), 0)
            }
            </h1>
                <button className="cart-checkout-button">Checkout</button>
            </div>

        </div> 
        
    );
}

const mapStateToProps = ({cart}) => ({
    cartStatus : cart.cartStatus,
    cartItems: cart.cartItems
})

 
export default connect(mapStateToProps)(Cart);