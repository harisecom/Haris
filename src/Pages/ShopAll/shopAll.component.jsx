import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductCard from '../../Components/ProductCard/ProductCard.component';
import PropTypes from 'prop-types';
import './shopAll.styles.css';


class ShopAll extends Component {
    constructor(){
        super()
        this.state ={
            categoryStatus: 'off',
            sortValue : 'bestSelling'
        }
    }

    handleChange = (e) => {
        this.setState({ sortValue: e.target.value})
    }

    productSortingPower = (allProducts, method, item) =>{

        const sortedItems = allProducts.map((product) => product[item])

        switch (method) {
            case 'alphabetical':
                sortedItems.sort();
                break;

            case 'priceLowToHigh':
                sortedItems.sort((a,b) => a-b);
                break;
            case 'priceHighToLow':
                sortedItems.sort((a,b) => b-a);
                break;
            default:
                break;
        }

        return Array(sortedItems.length).fill().map((_, idx) => {
            return allProducts.find((product) => product[item] === sortedItems[idx]);
        });
    }

    render(){
        const { allProducts } = this.props;
        const { sortValue } = this.state;

        const populateSortedProducts = (method, item) => (
            this.productSortingPower(allProducts, method, item).map((product) =>(
                <ProductCard key={product.id} product={product} />
            )))

        return (
            <div className="shopAllPage">
                <div className="filterSide">
                    <p>Filter By</p>
                    <div className="filterElements">
                        <ul className="filterItems" >
                            <li>Categories <span className="active">{`>`}</span>
                                <ul className="subFilterItems">
                                    <li>Face</li>
                                    <li>Brightening</li>
                                    <li>Serum</li>
                                    <li>Scrub</li>
                                </ul>
                            </li>
                            <li>Brands <span className="">{`>`}</span> </li>
                            <li>Price <span className="">{`>`}</span> </li> 
                        </ul>
                    </div>
                </div>
                <div className="productListing">
                    <div className="productListFilter">
                        <select name="sorting" onChange={this.handleChange} value={this.state.sortValue} id="sortingProducts">
                         <option value='bestSelling'>Best Selling</option>
                         <option value='sortAlphabetical'>Sort Alphabetically A-Z</option>
                         <option value='sortPriceLowToHigh' >Price Low to High</option>
                         <option value='sortPriceHighToLow'>Price High to Low</option>
                        </select>
                    </div>
                    <div className="allProducts">
                        { 
                            sortValue === 'bestSelling' ?
                                allProducts.map((bestSelling) => (
                                    <ProductCard key={bestSelling.id} product={bestSelling} />
                                )) : 
                            sortValue === 'sortAlphabetical'?
                                populateSortedProducts('alphabetical', 'productName') :
                            sortValue === 'sortPriceLowToHigh'?
                                populateSortedProducts('priceLowToHigh', 'price') :
                            sortValue === 'sortPriceHighToLow' ?
                                populateSortedProducts('priceHighToLow', 'price') : ''                                
                        }
                    </div>
                </div>
            </div>
                
        )
    }
   
}

const mapStateToProps = ({products}) => ({
    allProducts: products.allProducts
})

export default connect(mapStateToProps)(ShopAll)

ShopAll.propTypes = {
    allProducts : PropTypes.array
}


