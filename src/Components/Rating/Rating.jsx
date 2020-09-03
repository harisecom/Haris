import React, {useState} from 'react';
import './Rating.styles.css';
import Rating from '@material-ui/lab/Rating'
const RatingComponent = () => {
    const [rating, setRating] = useState();
    return (
        <div className="container d-flex flex-column">
            <span>Rating component, product will be right above</span>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event) => {
                    setRating(event.target.value);
                }}
            />
            <textarea className="form-control" placeholder="Ratings goes here"></textarea>
            <button type="button" className="btn btn-primary align-self-end mt-3">Submit Review</button>
        </div>

    )
    
}

export default RatingComponent;