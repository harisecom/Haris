import React from 'react';
import './Rating.styles.css';
import Rating from 'react-rating';
const RatingComponent = () => {
    return (
        <div className="container d-flex flex-column">
        <span>Rating component, product will be right above</span>
        <Rating
            className="stars"
            emptySymbol="fa fa-star fa-2x empty-star"
            fullSymbol="fa fa-star fa-2x full-star"
        />
        <textarea className="form-control" placeholder="Ratings goes here"></textarea>
        <button type="button" className="btn btn-primary align-self-end mt-3">Submit Review</button>

        </div>

    )
    
}

export default RatingComponent;