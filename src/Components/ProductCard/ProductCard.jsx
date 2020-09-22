import React from 'react';
import { connect } from 'react-redux';
import './ProductCard.style.css';
import { addItemToCart } from '../../Redux/cart/cart-action'

function ProductCard({ product, addItem}) {
    const { imageUrl, price, name, shortDescription, ratings} = product;
    return (
        <div className="product-card">
            <div className="productImagePart">
            <img src={imageUrl} alt=""/>
            <span className="priceTag">
            {price}$
            </span>
            <img src="/images/wishlist.png" alt="" className="productCard-wishlist"/>
            </div>
            <div className="productDescriptionPart">
                <h2>{name}</h2>
                <h4>{shortDescription}</h4>
                <div className="ratings">
                {
                    Array(ratings)
                    .fill()
                    .map((_, i) => (
                        <img src="/images/ratings.png" alt=""/>
                    ))
                }

                {
                    Array(5 - ratings)
                    .fill()
                    .map((_, i) => (
                        <img src="/images/nonratings.png" alt=""/>
                    ))
                }
                
                </div>

                <div className="add-to-cart-button">
                    <button onClick={() => addItem(product)}>Add to cart</button>
                </div>

            </div>
           
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        addItem : item => dispatch(addItemToCart(item))
    }
}

export default connect(null, mapDispatchToProps)(ProductCard)
