import React from 'react';
import { useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './ProductDetail.styles.css';
import Rating from '@material-ui/lab/Rating'
import firebase from '../../firebase/firebase.utils';
import {addItemToCart} from '../../Redux/cart/cart-action';


class ProductDetails extends React.Component {

  constructor(){
    super()
    this.state = {
        imageUrl : '',
        cartQuantity: '1',
        id: useParams(),
        activeMenu: 'details',
        mainImage: 0,
        productInfo: '',




    }
  }
  setProductInfo = () => {
    const productInfo = this.props.allProducts.find((elem) =>{
      return (elem.id === this.state.id);
    })
    this.setState({productInfo})
    
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
  }

  prevPicture = () => {
    // const maxNumber = productImages.length - 1;
    const maxNumber = 3
    if (this.state.mainImage !== 0) {
      this.setState({mainImage: (this.state.mainImage - 1)});
    } else {
      this.setState({mainImage: maxNumber});
    }
  };
  nextPicture = () => {
    // const maxNumber = productImages.length - 1;
    const maxNumber = 3
    if (this.state.mainImage < maxNumber) {
      this.setState({mainImage: (this.state.mainImage + 1)});
    } else {
      this.setState({mainImage: 0});
      
    }
  };

  menuOnClick = e => {
    const target = e.target.id;
    this.setState({activeMenu: target});
  };

  componentDidMount(){
    const productImages = this.state.productInfo.images;
    firebase.storage().ref(`/product-images/${this.state.id}/${productImages[0]}`)
    .getDownloadURL()
    .then((url) => {
        //from url you can fetched the uploaded image easily
        this.setState({imageUrl: url})
    })
    .catch((e) => console.log('getting downloadURL of image error => ', e));
    }

  render() {
    const {productInfo} = this.state
    return (
      <div>
        <div className="product-detail container">
          <div className="image">
            <div className="side-images">
              <img
                alt="side-1"
                className={`${this.state.mainImage === 0 ? 'image-active' : ''} side-image`}
                src={`${this.state.imageUrl}`}
                onClick={() => this.setState({mainImage: 0})}
              ></img>
              <img
                alt="side-2"
                className={`${this.state.mainImage === 1 ? 'image-active' : ''} side-image`}
                src={`${this.state.imageUrl}`}
                onClick={() => this.setState({mainImage: 1})}
              ></img>
              <img
                alt="side-3"
                className={`${this.state.mainImage === 2 ? 'image-active' : ''} side-image`}
                src={`${this.state.imageUrl}`}
                onClick={() => this.setState({mainImage: 2})}
              ></img>
            </div>
            <div className="product-image-main">
              <div className="product-image-name">
                <span>{productInfo.productName} &nbsp; </span> /{' '}
                <span className="emphasis">&nbsp; {productInfo.brand}</span>
              </div>
              <img
                alt="product"
                className="image-main"
                // src={productImages[mainImage]}
                src={`${this.state.imageUrl}`}
              ></img>
              <div className="arrows">
                <i className="fas fa-arrow-left fa-2x" onClick={this.prevPicture}></i>
                <i className="fas fa-arrow-right fa-2x" onClick={this.nextPicture}></i>
              </div>
            </div>
          </div>
          <div className="second-half">
            <h5>{productInfo.productName}</h5>
            <div className="section">
              <h5>{productInfo.brand}</h5>
              <h5>${productInfo.price}</h5>
            </div>
            <div className="reviews">
              <Rating name="read-only" value={productInfo.ratings} readOnly />
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
  addItem : item => dispatch(addItemToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

ProductDetails.propTypes = {
  addItem : PropTypes.func
}
