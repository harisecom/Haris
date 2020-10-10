import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './ProductDetail.styles.css';
import Rating from '@material-ui/lab/Rating'


import {addItemToCart} from '../../Redux/cart/cart-action';

const ProductDetails = ({ addItem, allProducts }) => {
  const {id} = useParams();
  

  const productInfo = allProducts.find((elem) =>{
    return (elem.id === id);
  })

  const productImages = productInfo.images;
  const [activeMenu, setActiveMenu] = useState('details');
  const [mainImage, setMainImage] = useState(0);
  // const [nextImage, setNextImage] = useState(1);
  // const [prevImage, setPrevImage ] = useState(productImages.length -1);
  const menuOnClick = e => {
    const target = e.target.id;
    setActiveMenu(target);
  };

  const prevPicture = () => {
    const maxNumber = productImages.length - 1;
    if (mainImage !== 0) {
      setMainImage(mainImage - 1);
    } else {
      setMainImage(maxNumber);
    }
  };
  const nextPicture = () => {
    const maxNumber = productImages.length - 1;
    if (mainImage < maxNumber) {
      setMainImage(mainImage + 1);
    } else {
      setMainImage(0);
    }
  };

  return (
    <div>

      <div className="product-detail container">
        <div className="image">
          <div className="side-images">
            <img
              alt="side-1"
              className={`${mainImage === 0 ? 'image-active' : ''} side-image`}
              src={productImages[0]}
              onClick={() => setMainImage(0)}
            ></img>
            <img
              alt="side-2"
              className={`${mainImage === 1 ? 'image-active' : ''} side-image`}
              src={productImages[1]}
              onClick={() => setMainImage(1)}
            ></img>
            <img
              alt="side-3"
              className={`${mainImage === 2 ? 'image-active' : ''} side-image`}
              src={productImages[2]}
              onClick={() => setMainImage(2)}
            ></img>
          </div>
          <div className="product-image-main">
            <div className="product-image-name">
              <span>The Skin Balancing Duo &nbsp; </span> /{' '}
              <span className="emphasis">&nbsp; The Skin Balancing Duo</span>
            </div>
            <img
              alt="product"
              className="image-main"
              src={productImages[mainImage]}
            ></img>
            <div className="arrows">
              <i className="fas fa-arrow-left fa-2x" onClick={prevPicture}></i>
              <i className="fas fa-arrow-right fa-2x" onClick={nextPicture}></i>
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
              onClick={menuOnClick}
              className={`${
                activeMenu === 'details' ? 'active-menu' : ''
              } menu-item`}
              id="details"
            >
              Details
            </button>
            <button
              onClick={menuOnClick}
              className={`${
                activeMenu === 'ingredients' ? 'active-menu' : ''
              } menu-item`}
              id="ingredients"
            >
              Ingredients
            </button>
            <button
              onClick={menuOnClick}
              className={`${
                activeMenu === 'how-to-use' ? 'active-menu' : ''
              } menu-item`}
              id="how-to-use"
            >
              How to use
            </button>
            <button
              onClick={menuOnClick}
              className={`${
                activeMenu === 'share' ? 'active-menu' : ''
              } menu-item`}
              id="share"
            >
              Share
            </button>
          </div>
          <hr className="line-below-nav"></hr>
          <div
            className={`${
              activeMenu === 'details' ? 'active-paragraph' : 'hidden'
            }`}
          >
          <p>{productInfo.shortDescription}</p>
          </div>
          <div
            className={`${
              activeMenu === 'ingredients' ? 'active-paragraph' : 'hidden'
            }`}
          >
            <p>{productInfo.ingredients}</p>
          </div>
          <div
            className={`${
              activeMenu === 'how-to-use' ? 'active-paragraph' : 'hidden'
            }`}
          >
            <p>{productInfo.howto}</p>
          </div>
          <div
            className={`${
              activeMenu === 'share' ? 'active-paragraph' : 'hidden'
            }`}
          >
            share
          </div>
          <div className="add-to-bag">
            <div className="quantity-section">
              <i className="fas fa-minus"></i>
              <span className="quantity">1</span>
              <i className="fas fa-plus"></i>
            </div>
            <button className="addButton" onClick={ () => addItem(productInfo) }>Add to cart</button>
            <div>
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
