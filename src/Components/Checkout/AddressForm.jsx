import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';


const BillingAddress = ({handleChange, values}) => {
  console.log('Hello bitch', values.billingCountry);
  return (
    <Fragment>
      <TextField
        label= "First name"
        onChange={handleChange('billingFirstName')}
        defaultValue={values.billingFirstName}
        margin="normal"
        variant="outlined"
      /> 
    <TextField 
        label="Last name"
        onChange={handleChange('billingLastName')}
        defaultValue={values.billingLastName} 
        variant="outlined"   
        margin="normal"
    />
    <br />
    <TextField 
        label="Company (optional)"
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
    />
    <br />
    <TextField 
        label="Apartment, suite, etc. (optional)"
        onChange={handleChange('billingApartment')}
        defaultValue={values.billingApartment}
        variant="outlined"
        margin="normal"
        fullWidth
    />
    <br />
    <TextField 
        label="city"
        onChange={handleChange('billingCity')}
        value={values.billingCity}
        variant="outlined"
        margin="normal"
        fullWidth
    />
    <br />
    <TextField
        label="Country/Region"
        onChange={handleChange('billingCountry')}
        value={values.billingCountry}
        variant="outlined"
        margin="normal"
    />
    <TextField
        label="State"
        onChange={handleChange('billingState')}
        value={values.billingState}
        variant="outlined"
        margin="normal"
    />  
    <TextField 
        label="Zip code"
        onChange={handleChange('billingPostal')}
        value={values.billingPostal}
        variant="outlined"
        margin="normal"
    />
    <br />
    <TextField 
        label="Phone Number (optional)"
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