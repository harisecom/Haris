import React, {Component, Fragment} from 'react';

import {MuiThemeProvider} from '@material-ui/core/styles';
import FormControlLable from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';

import { firestore } from "../../../firebase/firebase.utils";
import { connect } from 'react-redux';
import StripeCheckoutButton from '../../Stripe-Button/Stripe-Button.component';
import '../Checkout.styles.css';

export class FormUserInfomation extends Component {
    handleCheckBox = () => {
        const {saveShippingAddress} = this.props;
        if(!saveShippingAddress) {
            this.setState({saveShippingAddress: true});
            console.log('check box fired');
        }
        return this.setState({saveShippingAddress: false});  
    }

    firebaseUpdateUserData = async () =>{
        const {saveShippingAddress} = this.props;
        const userRef = firestore.doc(`users/${this.props.userId}`);
        const {firstName, lastName, company, address, apartment, city, state, country, postal, phone} = this.props.values
        if(saveShippingAddress === true)
        console.log('fired')
        try {
            await userRef.set({
                additionalInfomation : {firstName, lastName, company, address, apartment, city, state, country, postal, phone}
            });
        } catch (err) {
            console.error('error uploading user additional info', err.message);
        }

    }
    continue = e => {
        e.preventDefault();
        this.firebaseUpdateUserData();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                <div className="checkout-div">
                    {/* pass in price */}
                    <StripeCheckoutButton />
                    <form onSubmit={this.continue}>
                        <h2 className="contact-title">Contact Information</h2>
                        <TextField 
                            label= "Email"
                            type="email"
                            onChange={handleChange('emailaddress')}
                            defaultValue={values.emailaddress}
                            margin="normal"
                            variant="outlined"
                            required
                            fullWidth
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
                        
                        <div className="checkout-form-separator">
                            <TextField 
                                label="First name"
                                type="string"
                                onChange={handleChange('firstName')}
                                defaultValue={values.firstName}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <TextField 
                                label="Last name"
                                type="string"
                                onChange={handleChange('lastName')}
                                defaultValue={values.lastName} 
                                variant="outlined"   
                                margin="normal"
                                fullWidth
                                required
                            />
                       </div>

                        <TextField 
                            label="Company (optional)"
                            type="string"
                            onChange={handleChange('company')}
                            defaultValue={values.company}
                            variant="outlined"
                            margin="normal"
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
                            required
                        />
                        <br />
                        <TextField 
                            label="Apartment, suite, etc. (optional)"
                            type="number"
                            onChange={handleChange('apartment')}
                            defaultValue={values.apartment}
                            variant="outlined"
                            margin="normal"
                            fullWidths
                        />
                        <br />
                        <TextField 
                            label="city"
                            type="string"
                            onChange={handleChange('city')}
                            value={values.city}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <br />
                        <TextField
                            label="Country/Region"
                            type="string"
                            onChange={handleChange('country')}
                            value={values.country}
                            variant="outlined" 
                            margin="normal"
                            required    
                        />
                        <TextField
                            label="State"
                            type="string"
                            onChange={handleChange('state')}
                            value={values.state}
                            variant="outlined"
                            margin="normal"
                            required
                        />  
                        <TextField 
                            label="Zip code"
                            type="number"
                            onChange={handleChange('postal')}
                            value={values.postal}
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <br />
                        <TextField 
                            label="Phone Number (optional)"
                            type="tel"
                            onChange={handleChange('phone')}
                            defaultValue={values.phone}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <FormControlLable 
                            control={<Checkbox 
                                icon={<FavoriteBorderIcon />} 
                                checkedIcon={<FavoriteIcon />}
                                onChange={this.handleCheckBox}
                            />}
                            label="Save this information for next time"
                        />
                        <br />
                        <Button
                            color="secondary"
                            variant="contained"
                            size="large"
                            style={styles.button}
                            type="submit"
                        >
                            Continue to Shipping
                        </Button>
                    </form>
                </div>
                </Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        marginLeft: "30%",
        marginTop: "2rem"
    }
}
const mapDispatchToProps = (ownProps) => ({
    userId: ownProps.userId,
})
export default connect(null, mapDispatchToProps) (FormUserInfomation);