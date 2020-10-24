import React, { Component } from 'react';
import './checkout-item.styles.css';
import firebase from '../../../firebase/firebase.utils';

class CheckoutItem extends Component{

    constructor(){
        super()
        this.state = {
            imageUrl: ''
        }
    }
    componentDidMount(){

        const {id , images } = this.props.item;
        firebase.storage().ref(`/product-images/${id}/${images[0]}`)
        .getDownloadURL()
        .then((url) => {
            console.log(url);
            //from url you can fetched the uploaded image easily
            this.setState({imageUrl: url})
        })
        .catch((e) => console.log('getting downloadURL of image error => ', e));
        
        }
    

    render(){
        const {productName, price, quantity} = this.props.item;
        return ( 
        <div className="checkout-item">
            <div className="checkout-item-image">
                <img src={this.state.imageUrl} alt=""/>
                <span>{quantity}</span>
            </div>
            <div className="checkout-item-texts">

                <div className="checkout-item-info">
                    <h1>{productName.length > 20 ? `${productName.slice(0,20)}...` : productName}</h1>
                </div>

                <div className="checkout-item-price">
                    <span>${quantity * price}</span>
                </div>
                
            </div>
        </div>
     )
    }
    
}

 
export default CheckoutItem;
