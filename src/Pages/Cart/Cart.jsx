import React from 'react';
import CartItems from './cartItems/cartItems';
import { useStateValue } from '../../State/StateProvider';
import './cart.style.css';
import PropTypes from 'prop-types';

const Cart = () => {
    const [{ cartStatus } , dispatch] = useStateValue();

    return ( 
        <div className={`cart ${ cartStatus == true ? 'active' : ''} `} >
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

Cart.propTypes = {
    cartStatus: PropTypes.string
}

 
export default Cart;