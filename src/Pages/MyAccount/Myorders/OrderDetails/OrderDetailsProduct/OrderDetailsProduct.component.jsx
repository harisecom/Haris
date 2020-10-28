import React, { Component } from 'react';
import firebase from '../../../../../firebase/firebase.utils';
import './order-details-product.styles.css';

class OrderDetailsProduct extends Component{

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

        <div className="order-details-item">
            <div className="order-details-image">
                <img src={this.state.imageUrl} alt=""/>
            </div>
            <div className="order-details-texts">

                <div className="order-details-info">
                    <h1>{productName.length > 20 ? `${productName.slice(0,20)}...` : productName}</h1>
                </div>

                <div className="order-details-quantity">
                    <span>{quantity}</span>
                </div>

                <div className="order-details-price">
                    <span>${ parseFloat( quantity * price ).toFixed(2) } </span>
                </div>
                
            </div>
        </div>
     )
    }
    
}

 
export default OrderDetailsProduct;

