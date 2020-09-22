import React from 'react';
import { connect } from 'react-redux';
import './cartItems.style.css';
import {removeItemFromCart , decraseProductQuantity, addItemToCart} from '../../../Redux/cart/cart-action';

const CartItems = ({ item, removeItem, addItem, decreaseQuantity }) => {
    const {name, shortDescription, imageUrl, price, quantity} = item;

    return ( 
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="cart-item-texts">
                <div className="cart-item-info">
                    <h1>{name}</h1>
                    <p>{shortDescription}</p>
                    <div className="cart-item-remove">
                        <button onClick={() => removeItem(item)}>Remove</button>
                    </div>
                </div>
                <div className="cart-item-quantity">
                    <div className="arrow" onClick= {() => decreaseQuantity(item)}>&#10094;</div>
                    <span>{quantity}</span>
                    <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
                    
                </div>
                <div className="cart-item-price">
                    <span>${quantity * price}</span>
                </div>
                
            </div>
        </div>
     );
}

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItemFromCart(item)),
    addItem : item => dispatch(addItemToCart(item)),
    decreaseQuantity: item => dispatch(decraseProductQuantity(item))
})
 
export default connect(null, mapDispatchToProps)(CartItems);