<<<<<<< HEAD:src/Components/form-input/form-input.component.jsx
import React from "react";
=======
import React from 'react';
import PropTypes from 'prop-types';
>>>>>>> a4da9d311dcc2cc02d90be401f846ac40163ac4f:src/Components/form-input/FormInput.component.jsx
import './form-input.styles.css';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        { label ? (
            <label 
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
            >
                {label}
            </label>
        ): null}
    </div>
);

export default FormInput;

FormInput.propTypes = {
    handleChange: PropTypes.func,
    label: PropTypes.string
}