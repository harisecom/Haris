import React from 'react';
import PropTypes from 'prop-types';
import './Searchbar-products.styles.css';
import SearchbarProductsCard from '../Searchbar-products-card/Searchbar-card.component';

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
                    <SearchbarProductsCard item={item} key={item.id}></SearchbarProductsCard>
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