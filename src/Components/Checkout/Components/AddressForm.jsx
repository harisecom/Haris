import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

const BillingAddress = ({handleChange, values}) => {
  return (
    <Fragment>
      <TextField
        label= "First name"
        onChange={handleChange('billingFirstName')}
        defaultValue={values.billingFirstName}
        margin="normal"
        variant="outlined"
        required
      /> 
    <TextField 
        label="Last name"
        type="string"
        onChange={handleChange('billingLastName')}
        defaultValue={values.billingLastName} 
        variant="outlined"   
        margin="normal"
        required
    />
    <br />
    <TextField 
        label="Company (optional)"
        type="string"
        onChange={handleChange('billingCompany')}
        defaultValue={values.billingCompany}
        variant="outlined"
        margin="normal"
        fullWidth
    />
    <br />
    <TextField 
        label="Address"
        onChange={handleChange('billingAddress')}
        defaultValue={values.billingAddress}
        variant="outlined"
        margin="normal"
        fullWidth
        required
    />
    <br />
    <TextField 
        label="Apartment, suite, etc. (optional)"
        type="number"
        onChange={handleChange('billingApartment')}
        defaultValue={values.billingApartment}
        variant="outlined"
        margin="normal"
        fullWidth
    />
    <br />
    <TextField 
        label="city"
        type="string"
        onChange={handleChange('billingCity')}
        value={values.billingCity}
        variant="outlined"
        margin="normal"
        fullWidth
        required
    />
    <br />
    <TextField
        label="Country/Region"
        type="string"
        onChange={handleChange('billingCountry')}
        value={values.billingCountry}
        variant="outlined"
        margin="normal"
        required
    />
    <TextField
        label="State"
        type="string"
        onChange={handleChange('billingState')}
        value={values.billingState}
        variant="outlined"
        margin="normal"
        required
    />  
    <TextField 
        label="Zip code"
        type="number"
        onChange={handleChange('billingPostal')}
        value={values.billingPostal}
        variant="outlined"
        margin="normal"
        required
    />
    <br />
    <TextField 
        label="Phone Number (optional)"
        type="tel"
        onChange={handleChange('billingPhone')}
        defaultValue={values.billingPhone}
        variant="outlined"
        margin="normal"
        fullWidth
    />
    </Fragment>  
    
  )
}
export default withRouter(BillingAddress);