import React, {Component, Fragment} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import FormControlLable from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';


export class FormUserInfomation extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <h2>Contact Information</h2>
                    <span>
                        Already have an account?
                        <Link to="/signin">Log in</Link>
                    </span>
                    <TextField 
                        label= "Email"
                        onChange={handleChange('emailaddress')}
                        defaultValue={values.emailaddress}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        required={true}
                        type="email"
                    />
                    <br />
                    <FormControlLable 
                        control={<Checkbox 
                            icon={<FavoriteBorderIcon />} 
                            checkedIcon={<FavoriteIcon />}
                        />}
                        label="Keep me up to date on news and exclusive offers"
                    />
                    <h2>Shipping Address</h2>
                    <TextField 
                        label="First name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        variant="outlined"
                        margin="normal"
                        type="string"
                    />
                    <TextField 
                        label="Last name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName} 
                        variant="outlined"   
                        margin="normal"
                        type="string"
                    />
                    <br />
                    <TextField 
                        label="Company (optional)"
                        onChange={handleChange('company')}
                        defaultValue={values.company}
                        variant="outlined"
                        margin="normal"
                        type="string"
                        fullWidth
                    />
                    <br />
                    <TextField 
                        label="Address"
                        onChange={handleChange('address')}
                        defaultValue={values.address}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField 
                        label="Apartment, suite, etc. (optional)"
                        onChange={handleChange('apartment')}
                        defaultValue={values.apartment}
                        variant="outlined"
                        margin="normal"
                        type="number"
                        fullWidth
                    />
                    <br />
                    <TextField 
                        label="city"
                        onChange={handleChange('city')}
                        value={values.city}
                        variant="outlined"
                        margin="normal"
                        type="string"
                        fullWidth
                    />
                    <br />
                    <TextField
                        label="Country/Region"
                        onChange={handleChange('country')}
                        value={values.country}
                        variant="outlined" 
                        margin="normal"
                        type="string"
                    />
                    <TextField
                        label="State"
                        onChange={handleChange('state')}
                        value={values.state}
                        variant="outlined"
                        margin="normal"
                        type="string"
                    />  
                    <TextField 
                        label="Zip code"
                        onChange={handleChange('postal')}
                        value={values.postal}
                        variant="outlined"
                        margin="normal"
                        type="number"
                    />
                    <br />
                    <TextField 
                        label="Phone Number (optional)"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        variant="outlined"
                        margin="normal"
                        type="tel"
                        fullWidth
                    />
                    <br />
                    <FormControlLable 
                        control={<Checkbox 
                            icon={<FavoriteBorderIcon />} 
                            checkedIcon={<FavoriteIcon />}
                        />}
                        label="Save this information for next time"
                    />
                </Fragment>
                <br />
                <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    onClick={this.continue}
                >Continue to Shipping</Button>
            </MuiThemeProvider>
        )
    }
}
export default FormUserInfomation;