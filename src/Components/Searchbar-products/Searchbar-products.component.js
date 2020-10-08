import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating'
import './Searchbar-products.styles.css';

const SearchbarProducts = ({items}) => {
    return (
        <ul>
        
        {
            (items.length >0 ? 
            <li className="search-title-li">
                <span className="search-title">Products</span>
            </li> :
             '' )}
        {
            items.map((item) => {
                return (
                    <li key={item.id}>
                        <a className="search-product-a">
                            <img  src={`${item.imageUrl}`} className="search-product-image"></img>
                            <div className="search-product-group">
                            <span className="search-product-title">{item.name}</span>
                            <span className="search-product-description">{item.shortDescription}</span>
                            <span className="search-product-price">${item.price}</span>
                            <span className="search-product-reviews">
                                <div className="reviews">
                                <Rating name="read-only" value={item.ratings} readOnly />
                                <span className="review-number">(20 Reviews)</span>
                                </div>
                            </span>
                            </div>
                        </a>
                    </li>
                )
            })
        }
        {(items.length >0 ?<li className="search-last-li"><div className="search-view-items">View All Items</div></li> : '' )}
        
      </ul>
    )
}

export default SearchbarProducts;

SearchbarProducts.propTypes = {
    items : PropTypes.arrayOf(PropTypes.object)

}