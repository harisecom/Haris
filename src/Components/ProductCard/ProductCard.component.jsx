import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductCard.style.css';
import firebase from '../../firebase/firebase.utils';
import { addItemToCart, cartAction } from '../../Redux/cart/cart-action';
import { withRouter } from 'react-router-dom';
class ProductCard extends Component {
    constructor(){
        super()
        this.state = {
            imageUrl : ''
        }
    }
    componentDidMount(){
    const {id, images} = this.props.product;
    firebase.storage().ref(`/product-images/${id}/${images[0]}`)
    .getDownloadURL()
    .then((url) => {
        //from url you can fetched the uploaded image easily
        this.setState({imageUrl: url})
    })
    .catch((e) => console.log('getting downloadURL of image error => ', e));
    }

    
    render(){

        const { id, price, productName, shortDescription, ratings} = this.props.product;
        const { addItem} = this.props;
        return (
        <div className="productCardComponent">
        
        <div className="product-card" onClick={ () => this.props.history.push(`product/${id}`)}>
            <div className="productImagePart">
            <img src={this.state.imageUrl} alt=""/>
            <span className="priceTag">
            {price}$
            </span>
            <img src="/images/wishlist.png" alt="" className="productCard-wishlist"/>
            </div>
            <div className="productDescriptionPart">
                <h2>{productName.length > 25 ? `${productName.slice(0,20)}...` : productName}</h2>
                <h4>{ shortDescription.length > 50 ? `${shortDescription.slice(0,50)}...` : shortDescription  }</h4>
                <div className="ratings">
                {
                    Array(ratings)
                    .fill()
                    .map((_, key) => (
                        <img key={key} src="/images/ratings.png" alt=""/>
                    ))
                }
                {
                    Array(5 - ratings)
                    .fill()
                    .map((_, key) => (
                        <img key={key} src="/images/nonratings.png" alt=""/>
                    ))
                }
                </div>
            </div>
        </div>
            <div className="add-to-cart-button">
                <button onClick={() => addItem(this.props.product)}>Add to cart</button>
            </div>
        </div>
    )
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addItem : item => {
            dispatch(addItemToCart(item))
            dispatch(cartAction())
        },
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ProductCard))
