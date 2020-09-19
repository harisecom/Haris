import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer.component';
import { Products } from '../../Data/Products';
import './product-detail.styles.css';

const ProductDetails = () => {
  const {id} = useParams();
  

  const productInfo = Products.find((elem) =>{
    return elem.items.find((prod) => prod.id === id)
  })

  console.log(productInfo.items[0].name);

  const productImages = [
    'https://media.glamour.com/photos/5cc9bd1080911dec300bc131/3:2/w_1800,h_1200,c_limit/0501_nomakeup_river.jpg',
    'https://m.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E10002_1080x1080_0.jpg',
    'https://pyxis.nymag.com/v1/imgs/0d2/c9d/7e2638d562bb724d04da328e4dba4cfa04-nars-semi-matte-lipstick-in-jungle-red.rsquare.w600.jpg',
  ];
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
          <h2>{productInfo.items[0].name}</h2>
          <div className="section">
            <h5>{productInfo.items[0].shortDescription}</h5>
            <h5>${productInfo.items[0].price}</h5>
          </div>
          <div className="reviews">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span className="review-number">(20 Reviews)</span>
          </div>

          <div className="navbar menu">
            <a
              href={'/'}
              onClick={menuOnClick}
              className={`${
                activeMenu === 'details' ? 'active-menu' : ''
              } menu-item`}
              id="details"
            >
              Details
            </a>
            <a
              href={'/'}
              onClick={menuOnClick}
              className={`${
                activeMenu === 'ingredients' ? 'active-menu' : ''
              } menu-item`}
              id="ingredients"
            >
              Ingredients
            </a>
            <a
              href={'/'}
              onClick={menuOnClick}
              className={`${
                activeMenu === 'how-to-use' ? 'active-menu' : ''
              } menu-item`}
              id="how-to-use"
            >
              How to use
            </a>
            <a
              href={'/'}
              onClick={menuOnClick}
              className={`${
                activeMenu === 'share' ? 'active-menu' : ''
              } menu-item`}
              id="share"
            >
              Share
            </a>
          </div>
          <hr className="line-below-nav"></hr>
          <div
            className={`${
              activeMenu === 'details' ? 'active-paragraph' : 'hidden'
            }`}
          >
            <p>
              Do more for your skin by incorporating this hydrating, low pH
              (4.5) cleansing toner into your daily regimen. The formula is
              enriched with maple extract — known for its antioxidant and skin
              softening properties — as well as.
            </p>
            <p>
              anti-inflammatory that soothes and nourishes. The inclusion of
              natural pumpkin and papaya enzymes help gently exfoliate skin and
              remove impurities. After using, skin feels heathy, hydrated,
              clean, and balanced.
            </p>
          </div>
          <div
            className={`${
              activeMenu === 'ingredients' ? 'active-paragraph' : 'hidden'
            }`}
          >
            ingredients
          </div>
          <div
            className={`${
              activeMenu === 'how-to-use' ? 'active-paragraph' : 'hidden'
            }`}
          >
            how-to-use
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
            <button className="addButton">Add to Bag</button>
            <div>
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
