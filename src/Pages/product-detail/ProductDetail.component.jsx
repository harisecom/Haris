import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './ProductDetail.styles.css';
import Rating from '@material-ui/lab/Rating'
import firebase from '../../firebase/firebase.utils';
import {addItemToCart, cartAction} from '../../Redux/cart/cart-action';
import ProductImage from './productImage/productImage.component';


class ProductDetails extends React.Component {

  constructor(){
    super()
    this.state = {
        imageUrl : [],
        cartQuantity: 1,
        id: '',
        activeMenu: 'details',
        productInfo: '',
    }
  }
 

  addCartQuantity = () => {
    this.setState((state) => ({cartQuantity: state.cartQuantity + 1}));
  }
  minusCartQuantity = () => {
    this.setState((state) => ({cartQuantity: state.cartQuantity - 1}));
  }


  addProductToCart = (quantity) => {
    for(let i=0 ; i < quantity ; i++) {
      this.props.addItem(this.state.productInfo);
    }
    this.props.cartAction();
  }



  menuOnClick = e => {
    const target = e.target.id;
    this.setState({activeMenu: target});
  };

  componentDidMount(){
    this.setState({
      id: this.props.match.params.id,
    })
  }
  
  async componentDidUpdate(prevProps, prevState){
    if(prevState.id !==this.props.match.params.id){
      this.setState({
        id: this.props.match.params.id,
      })
    }
    let productInfo = this.props.allProducts.find((elem) =>{
      return (elem.id === this.state.id);
    })
    if(this.props.allProducts.length > 0 && prevState.productInfo !== productInfo){
      this.setState({productInfo})
    }
    if(this.state.id){
      const storageRef = firebase.storage().ref(`/product-images/${this.state.id}`)
      await storageRef.listAll().then((result)=> {

        let promises = result.items.map((imageItem) =>{
           return imageItem.getDownloadURL()
         });
         Promise.all(promises).then(urls => this.setState({imageUrl: urls}))
      })

    }


  }

  render() {


    const {productInfo} = this.state;


    return (
      <div>
        <div className="product-detail container">
          <ProductImage imageUrl={this.state.imageUrl} productInfo={productInfo} /> 
          <div className="second-half">
            <h5>{productInfo.productName}</h5>
            <div className="section">
              <h5>{productInfo.brand}</h5>
              <h5>${productInfo.price}</h5>
            </div>
            <div className="reviews">
              <Rating name="read-only" value={productInfo.ratings || 0} readOnly />
            </div>
  
            <div className="navbar menu">
              <button
                onClick={this.menuOnClick}
                className={`${
                  this.state.activeMenu === 'details' ? 'active-menu' : ''
                } menu-item`}
                id="details"
              >
                Details
              </button>
              <button
                onClick={this.menuOnClick}
                className={`${
                  this.state.activeMenu === 'ingredients' ? 'active-menu' : ''
                } menu-item`}
                id="ingredients"
              >
                Ingredients
              </button>
              <button
                onClick={this.menuOnClick}
                className={`${
                  this.state.activeMenu === 'how-to-use' ? 'active-menu' : ''
                } menu-item`}
                id="how-to-use"
              >
                How to use
              </button>
              <button
                onClick={this.menuOnClick}
                className={`${
                  this.state.activeMenu === 'share' ? 'active-menu' : ''
                } menu-item`}
                id="share"
              >
                Share
              </button>
            </div>
            <hr className="line-below-nav"></hr>
            <div
              className={`${
                this.state.activeMenu === 'details' ? 'active-paragraph' : 'hidden'
              }`}
            >
            <p>{productInfo.shortDescription}</p>
            </div>
            <div
              className={`${
                this.state.activeMenu === 'ingredients' ? 'active-paragraph' : 'hidden'
              }`}
            >
              <p>{productInfo.ingredients}</p>
            </div>
            <div
              className={`${
                this.state.activeMenu === 'how-to-use' ? 'active-paragraph' : 'hidden'
              }`}
            >
              <p>{productInfo.howto}</p>
            </div>
            <div
              className={`${
                this.state.activeMenu === 'share' ? 'active-paragraph' : 'hidden'
              }`}
            >
              share
            </div>
            <div className="add-to-bag">
              <div className="quantity-section">
                <i className="fas fa-minus" onClick={this.minusCartQuantity}></i>
                <span className="quantity">{this.state.cartQuantity}</span>
                <i className="fas fa-plus" onClick={this.addCartQuantity}></i>
              </div>
              <button className="addButton" onClick={ () => this.addProductToCart(this.state.cartQuantity) }>Add to cart</button>
              <div>
                <i className="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
};

const mapStateToProps = ({products}) => ({
  allProducts: products.allProducts

})

const mapDispatchToProps = dispatch => ({
  addItem : item => dispatch(addItemToCart(item)),
  cartAction : () => dispatch(cartAction())

})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

ProductDetails.propTypes = {
  addItem : PropTypes.func
}
