import React, { useState } from 'react';
import './productImage.styles.css';
import PropTypes from 'prop-types';

const ProductImage = ({imageUrl,  productInfo}) => {

    const [mainImage, setMainImage] = useState(0)

    const prevPicture = () => {
        const maxNumber = imageUrl.length - 1;
        if (mainImage !== 0) {
          setMainImage(mainImage - 1);
        } else {
            setMainImage(maxNumber);

        }
      };
      const nextPicture = () => {
        const maxNumber = imageUrl.length - 1;
        if (mainImage < maxNumber) {
            setMainImage(mainImage + 1);

        } else {
            setMainImage(0);
        }
      };


        const sideImageList = imageUrl.map( (el, index) => {
        return(
            <img
            alt= {`side-${index}`}
            key= {index}
            className={`${mainImage === index ? 'image-active' : ''} side-image`}
            src={`${el}`}
            onClick={() => setMainImage(index)}
            ></img>
        )
        })


    return(
          <div className="image">
          <div className="side-images">
            {sideImageList}
          </div>
          <div className="product-image-main">
            <div className="product-image-name">
              <span>{productInfo.productName} &nbsp; </span> /{' '}
              <span className="emphasis">&nbsp; {productInfo.brand}</span>
            </div>
            <img
              alt="product"
              className="image-main"
              src={`${imageUrl[mainImage]}`}
            ></img>
            <div className="arrows">
              <i className="fas fa-arrow-left fa-2x" onClick={prevPicture}></i>
              <i className="fas fa-arrow-right fa-2x" onClick={nextPicture}></i>
            </div>
          </div>
        </div>
    )
}

export default ProductImage;
