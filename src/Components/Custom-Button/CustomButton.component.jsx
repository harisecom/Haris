import React from 'react';
import './CustomButton.styles.css';
import {PropTypes} from 'prop-types';

const CustomButton = ({children, isGoogleSignIn,...otherProps}) => (
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;

CustomButton.propTypes = {
    children: PropTypes.string
}