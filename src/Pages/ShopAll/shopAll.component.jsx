import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductCard from '../../Components/ProductCard/ProductCard.component';
import PropTypes from 'prop-types';
import './shopAll.styles.css';


class ShopAll extends Component {
    constructor(){
        super()
        this.state ={
            categoryStatus: false,
            brandStatus: false,
            priceStatus: false,
            sortValue : 'bestSelling',
            categorySortValue: '',
            brandSortValue: '',
            priceSortvalue: 0
        }
    }

    handleCategorySorting = (value) =>{
        this.setState({ categorySortValue: value});
        this.setState({brandSortValue: ''});
        this.setState({priceSortvalue: 0});
        
    }

    handleBrandSorting = (value) =>{
        this.setState({ brandSortValue: value});
        this.setState({ categorySortValue: ''});
        this.setState({priceSortvalue: 0});
    }
    handlePriceChange = (event) => {
        this.setState({ priceSortvalue: event.target.value});
        this.setState({ brandSortValue: ''});
        this.setState({ categorySortValue: ''});

    }

    handleCategoryStatus = () =>{
        this.setState({ categoryStatus : !this.state.categoryStatus})
    }
    handleBrandStatus = () =>{
        this.setState({ brandStatus : !this.state.brandStatus})
    }
    handlePriceStatus = () =>{
        this.setState({ priceStatus : !this.state.priceStatus})
    }





    handleChange = (e) => {
        this.setState({ sortValue: e.target.value});
        this.setState({ brandSortValue: ''});
        this.setState({ categorySortValue: ''});
        this.setState({priceSortvalue: 0});

    }

    productSortingPower = (allProducts, method, item, allCategory='') =>{

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
            case 'sortByCategory':
                return allCategory[item].items;
            case 'sortByBrand':
                return allProducts.filter(brandProduct => brandProduct['brand'] === item);
            case 'priceSliderSorting':
                return allProducts.filter(rangeProduct => rangeProduct['price'] <= item);
            default:
                break;
        }

        return Array(sortedItems.length).fill().map((_, idx) => {
            return allProducts.find((product) => product[item] === sortedItems[idx]);
        });
    }

    render(){
        const { allProducts, allCategories } = this.props;
        const { sortValue, categoryStatus, categorySortValue, brandStatus, brandSortValue, priceStatus, priceSortvalue } = this.state;

        const populateSortedProducts = (method, item, category='') => (
            this.productSortingPower(allProducts, method, item, category).map((product) =>(
                <ProductCard key={product.id} product={product} />
            )));
        
        const allBrands = () => {
            const allBrandsName = allProducts.map(item => item.brand);
            const uniqueBrands = [...new Set(allBrandsName)];
            return uniqueBrands;
        }

        return (
            <div className="shopAllPage">
                <div className="filterSide">
                    <p>Filter By</p>
                    <div className="filterElements">
                        <ul className="filterItems" >
                            <li>Categories <span onClick={this.handleCategoryStatus} className={ categoryStatus ? 'active' : ''} > {`>`}</span>

                                { categoryStatus ? 
                                    <ul className="subFilterItems">
                                    {
                                        Object.keys(allCategories).map((item, key) => (
                                            <li onClick={() => this.handleCategorySorting(item) } key={key}>{item}</li>
                                        ))
                                    }
                                    </ul> : ''
                                }
                                    
                            </li>

                            <li>Brands <span onClick={this.handleBrandStatus} className={brandStatus ? 'active' : ''} > {`>`}</span>
                            { brandStatus ? 
                                <ul className="subFilterItems">
                                    {
                                        allBrands().map((brand) => (
                                            <li onClick={() => this.handleBrandSorting(brand)} key={brand}>{brand}</li>
                                        ))
                                    }
                                </ul> : ''
                            }
                            </li>

                            <li>Price <span onClick={this.handlePriceStatus} className={priceStatus ? 'active' : ''} >{`>`}</span>
                                {   priceStatus ? 
                                    <ul className="subFilterItems">
                                        <li> 0$ <input 
                                                id="typeinp" 
                                                type="range" 
                                                min="0" max="200" 
                                                value={this.state.value} 
                                                onChange={this.handlePriceChange}
                                                step="1"/> 200$
                                            </li>
                                    </ul> : ''

                                }    
                            
                            </li>

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

                        categorySortValue.length ?
                            populateSortedProducts('sortByCategory', categorySortValue, allCategories) :
                        brandSortValue.length ?
                            populateSortedProducts('sortByBrand', brandSortValue) :
                        priceSortvalue.length ?
                            populateSortedProducts('priceSliderSorting', priceSortvalue) :
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

const mapStateToProps = ({products, category}) => ({
    allProducts: products.allProducts,
    allCategories: category.allCategories 
})

export default connect(mapStateToProps)(ShopAll)

ShopAll.propTypes = {
    allProducts : PropTypes.array
}