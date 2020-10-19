import React, { Fragment, useState } from 'react';
import Cards from 'react-credit-cards';
import TextField from '@material-ui/core/TextField';

import 'react-credit-cards/es/styles-compiled.css';

const MyCards = ({values, handleChange}) => {
    const [focus, setFocus] = useState('');
    return (
    <Fragment>
        <Cards 
            cvc={values.cvc}
            expiry={values.expiry}
            name={values.name}
            number={values.number}
            focused={focus}
        />
           <TextField 
            onChange={handleChange('number')}
            value={values.number}
            label="Card Number"
            name="number"
            type="tel"
            margin="normal"
            variant="outlined"
            onFocus={e => setFocus(e.target.name)}
            fullWidth
            required
        />
        <TextField 
            onChange={handleChange('name')}
            defaultValue={values.name}
            label="Name on Card"
            name="name"
            type="string"
            margin="normal"
            variant="outlined"
            onFocus={e => setFocus(e.target.name)}
            fullWidth
            required
        />
        <TextField 
            onChange={handleChange('expiry')}
            defaultValue={values.expiry}
            label="Expire Date MM/YY"
            name="expiry"
            type="string"
            margin="normal"
            variant="outlined"
            onFocus={e => setFocus(e.target.name)}
            required
        />
        <TextField 
            onChange={handleChange('cvc')}
            defaultValue={values.cvc}
            label="CVC"
            name="cvc"
            type="number"
            margin="normal"
            variant="outlined"
            onFocus={e => setFocus(e.target.name)}
            required
        />
    </Fragment>
    )
}

export default MyCards;