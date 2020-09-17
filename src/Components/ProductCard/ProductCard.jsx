import React from 'react';
import './ProductCard.style.css';

function ProductCard(props) {
    return (
        <div className="product-card">
            <div className="productImagePart">
            <img src={props.product.imageUrl} alt=""/>
            <span className="priceTag">
            {props.product.price}$
            </span>
            <img src="/images/wishlist.png" alt="" className="productCard-wishlist"/>
            </div>
            <div className="productDescriptionPart">
                <h2>{props.product.name}</h2>
                <h4>{props.product.shortDescription}</h4>
                <div className="ratings">
                {
                    Array(props.product.ratings)
                    .fill()
                    .map((_, i) => (
                        <img src="/images/ratings.png" alt=""/>
                    ))
                }

                {
                    Array(5 - props.product.ratings)
                    .fill()
                    .map((_, i) => (
                        <img src="/images/nonratings.png" alt=""/>
                    ))
                }
                
                </div>

                <div className="add-to-cart-button">
                    <button>Add to cart</button>
                </div>

            </div>
           
        </div>
    )
}

export default ProductCard
