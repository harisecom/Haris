import React from 'react';
import CartItems from './cartItems/CartItems.component';
import PropTypes from 'prop-types';
import './cart.style.css';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { cartAction } from '../../Redux/cart/cart-action';

const Cart = ({cartStatus, cartItems, dispatch}) => {

    let history = useHistory();

    return ( 
        <div className={`cart ${ cartStatus === true ? 'active' : ''} `} >
            <div className="cart-items">
                {
                    cartItems.map( (item, key) => (
                        <CartItems key={key} item= {item}/>
                    ))
                }
            </div>

            <div className="cart-to-checkout">
            

            {
                cartItems.length ? 
                <>
                <h1 className="cart-total-price">Subtotal : $
                    {
                cartItems.reduce((accumulator, item) => (
                    accumulator += (item.quantity * item.price)
                ), 0)
                }
                </h1>
                
                <button className={`cart-checkout-button $}`} 
                onClick={
                    () => {
                            history.push("/checkout")
                            dispatch(cartAction())
                        }
                    } 
                >
                Checkout</button>
                </> :
                <h2>Your cart is empty.</h2>



            }
                
                
            </div>

        </div> 
        
        );
}

const mapStateToProps = ({cart}) => ({
    cartStatus : cart.cartStatus,
    cartItems: cart.cartItems
})

 
export default connect(mapStateToProps)(Cart);

Cart.propTypes ={
    cartStatus : PropTypes.bool,
    cartItems : PropTypes.array,
    dispatch : PropTypes.func,

}