import React, { Component } from 'react';
import './main-content.style.css';
import ProductCard from '../../../Components/ProductCard/ProductCard.component';
import { firestore } from '../../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';

class MainContent extends Component {

  constructor() {
    super();
    this.state = {
      bestDeals: [],
      currentlyTrending: [],
      newlyAdded: [],
      newslatterEmail: '',
    }

  }

  snapshotGrabber = (documentRef, stateName) => {
    documentRef.onSnapshot(async (snapshot) => {
      const collection = snapshot.data();
      console.log(collection);
      this.setState({ [stateName]: collection })

    })
  }

  componentDidMount() {

    const bestDealsDocRef = firestore.doc('categories/best-deals');
    const currentlyTrendingDocRef = firestore.doc('categories/currently-trending');
    const newlyAddedDocRef = firestore.doc('categories/newly-added');

    this.snapshotGrabber(bestDealsDocRef, 'bestDeals');
    this.snapshotGrabber(currentlyTrendingDocRef, 'currentlyTrending');
    this.snapshotGrabber(newlyAddedDocRef, 'newlyAdded');




  }

  handleChange = (e) => {
    this.setState({ newslatterEmail: e.target.value})
  }




  render() {
    return (
      <div>
        <div className="main-text">
          <h1>START YOUR SKIN CARE JOURNEY</h1>
          <p>
            Skin care is a personal journey and we are here to guide you along the way <br />
          Trusted to bring you FDA-approved, authentic products since 2012.
        </p>
        </div>

        <div className="shop-by-category">
          <ul>
            <li className="selected" onClick={() => this.props.history.push('/shop')}>SHOP BY BEST DEALS</li>
            <li onClick={() => this.props.history.push('/shop')}>SHOP BY BEST SHOPS</li>
            <li onClick={() => this.props.history.push('/shop')}>SHOP BY BEST SELLS</li>
          </ul>
        </div>

        <div className="best-deals">
          <div className="populate-all-products">

            <div className="product-item-align">
              {
                Object.keys((this.state.bestDeals)).length !== 0 ?

                  this.state.bestDeals.items.filter((item, idx) => idx < 3).map((product, key) => (
                    <ProductCard key={key} product={product} />
                  )) :
                  null

              }
            </div>

          </div>
        </div>

        <div className="banner-promo-component">
          <div className="banner-promo-section">
            <div className="banner-text-content">
              <h3>DEVELOPED BY HARIS LABS</h3>
              <h1>GOOD (SKIN) DAYS</h1>
              <p>Committed to approachable, effective formulation that
                  are designed with you and your skin care journey in mind.
                  </p>
              <button onClick={() => this.props.history.push('/shop')}> SHOP NOW</button>
            </div>
            <div className="banner-image-content">
              <img src="/images/banner-image-content.png" alt="" />
            </div>
          </div>
        </div>

        <div className="currently-trending">
          <h1>CURRENTLY TRENDING</h1>
          <div className="populate-all-products">
            <div className="product-item-align">
              {
                Object.keys((this.state.currentlyTrending)).length !== 0 ?

                  this.state.currentlyTrending.items.filter((item, idx) => idx < 3).map((product, key) => (
                    <ProductCard key={key} product={product} />
                  )) :
                  null

              }
            </div>
          </div>


        </div>

        <div className="newly-added">
          <h1>NEWLY ADDED</h1>
          <div className="populate-all-products">
            <div className="product-item-align">
              {
                Object.keys((this.state.newlyAdded)).length !== 0 ?

                  this.state.newlyAdded.items.filter((item, idx) => idx < 3).map((product, key) => (
                    <ProductCard key={key} product={product} />
                  )) :
                  null

              }
            </div>
          </div>

        </div>
        <div className="newslater-subscription">
          <div className="newslater-subscription-elements">
            <p>Sign up for subscriber-only discounts, first look at <br />
             newly-curated items & K-beuty skincare tips! </p>
             <form action="https://gmail.us2.list-manage.com/subscribe/post?u=130da831f8e0876c203ee4cc7&amp;id=44b7104330" method="post" className="newslatter-form">
              <input type="email" value={this.state.newslatterEmail} onChange={this.handleChange} name="EMAIL" placeholder="Your Email..." />
              <button type="submit">Submit</button>
              </form>
          </div>

        </div>
      </div>
    )
  }

}



export default withRouter(MainContent);
