import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../../firebase/firebase.utils';
import PropTypes from 'prop-types';
import './cart-items.style.css';
import {removeItemFromCart , decraseProductQuantity, addItemToCart} from '../../../Redux/cart/cart-action';

class CartItems extends Component {

    constructor() {
        super()
        this.state = {
            imageUrl: ''
        }
    }
    componentDidMount() {
        const {id, images} = this.props.item;
        firebase.storage().ref(`/product-images/${id}/${images[0]}`)
        .getDownloadURL()
        .then((url) => {
            console.log(url);
            //from url you can easily fetch the uploaded images
            this.setState({imageUrl: url})
        })
        .catch((err) => console.error('An error occurred in getDownLoadURL', err));
    }

    render() {
    const {productName, shortDescription, price, quantity} = this.props.item;
    const {removeItem, addItem, decreaseQuantity} = this.props;

        return ( 
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src={this.state.imageUrl} alt=""/>
                </div>
                <div className="cart-item-texts">
                    <div className="cart-item-info">
                        <h1>{productName.length > 20 ? `${productName.slice(0,20)}...` : productName}</h1>
                        <p>{shortDescription.length > 30 ? `${shortDescription.slice(0,30)}...` : shortDescription}</p>
                        <div className="cart-item-remove">
                            <button onClick={() => removeItem(this.props.item)}>Remove</button>
                        </div>
                    </div>
                    <div className="cart-item-quantity">
                        <div className="arrow" onClick= {() => decreaseQuantity(this.props.item)}>&#10094;</div>
                        <span>{quantity}</span>
                        <div className="arrow" onClick={() => addItem(this.props.item)}>&#10095;</div> 
                    </div>
                    <div className="cart-item-price">
                        <span>${quantity * price}</span>
                    </div>
                </div>
            </div>
        );
    } 
}

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItemFromCart(item)),
    addItem : item => dispatch(addItemToCart(item)),
    decreaseQuantity: item => dispatch(decraseProductQuantity(item))
})
 
export default connect(null, mapDispatchToProps)(CartItems);

CartItems.prototypes = {
    item: PropTypes.object,
    removeItem: PropTypes.func,
    addItem: PropTypes.func,
    decreaseQuantity: PropTypes.func,
}