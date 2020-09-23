import React from 'react';

import './custom-button.styles.css';
import PropTypes from 'prop-types';

const CustomButton = ({children, ...otherProps}) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
);

export default CustomButton;

CustomButton.propTypes={
    children: PropTypes.string
}