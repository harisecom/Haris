import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating'
import './Searchbar-card.styles.css';
import firebase from '../../../firebase/firebase.utils';

class SearchbarProductsCard extends React.Component {
    constructor(){
        super()
        this.state = {
            imageUrl : ''
        }
    }

    componentDidMount(){
        const {id, images} = this.props.item;
        firebase.storage().ref(`/product-images/${id}/${images[0]}`)
        .getDownloadURL()
        .then((url) => {
            //from url you can fetched the uploaded image easily
            this.setState({imageUrl: url})
        })
        .catch((e) => console.log('getting downloadURL of image error => ', e));
        }

    render() {
        const item = this.props.item;
        return(
            <li key={item.id}>
                <a className="search-product-a">
                    <img  src={`${this.state.imageUrl}`} className="search-product-image"></img>
                    <div className="search-product-group">
                    <span className="search-product-title">{item.productName}</span>
                    <span className="search-product-description">{item.shortDescription}</span>
                    <span className="search-product-price">${item.price}</span>
                    <span className="search-product-reviews">
                        <div className="reviews">
                        <Rating name="read-only" value={item.ratings} readOnly />
                        {/* <span className="review-number">(20 Reviews)</span> */}
                        </div>
                    </span>
                    </div>
                </a>
            </li>
        )
   } 
    
}


export default SearchbarProductsCard;


SearchbarProductsCard.propTypes = {
    item : PropTypes.object
}