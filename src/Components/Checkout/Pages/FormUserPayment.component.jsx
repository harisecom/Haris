import React, {Component, Fragment} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLable from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import BillingAddress from '../Components/AddressForm';
import MyCards from '../Components/MyCards.component';
import { firestore } from "../../../firebase/firebase.utils";

import '../Checkout.styles.css';

export class FormUserPayment extends Component {
    state = {
        sameAddress: 1
    }

    continue = e => {
        e.preventDefault();


        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    radioHandler = (sameAddress) => {
        this.setState({sameAddress});
    }

    render() {
        const { values, handleChange, handleToggleUseShippingAsBilling } = this.props;
        const { sameAddress } = this.state;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <div className="checkout-div">
                        <form onSubmit={this.continue}>
                            <h2 className="payment-title">Payment</h2>
                                <MyCards 
                                    handleChange={handleChange}
                                    values={values}
                                />
                            <h2>Billing Address</h2>
                            <RadioGroup name="billingAddress"  onChange={handleChange} className="radio-form checkout-div">
                                <FormControlLable 
                                    value="A"
                                    control={<Radio 
                                        icon={<FavoriteBorderIcon />} 
                                        checkedIcon={<FavoriteIcon />}
                                        onClick={(e) => this.radioHandler(1)}
                                        onChange={handleToggleUseShippingAsBilling}
                                        required={true}
                                    />}
                                    label="Same as shipping address"
                                />
                                <FormControlLable 
                                    value="B"
                                    control={<Radio 
                                        icon={<FavoriteBorderIcon />} 
                                        checkedIcon={<FavoriteIcon />}
                                        onClick={(e) => this.radioHandler(0)}
                                        onChange={handleToggleUseShippingAsBilling}
                                        required={true}
                                    />}
                                    label="Use a different billing address"
                                />
                            </RadioGroup>
                            { sameAddress === 0 ? (
                                <BillingAddress  
                                    handleChange={handleChange}
                                    values={values}

                                />
                        
                            ): (
                                ''
                            )

                            }
                            <br />
                            <Button
                                color="secondary"
                                size="medium"
                                onClick={this.back}
                                style={{
                                    marginTop: "2rem"
                                }}
                            >
                                Return to shipping
                            </Button>
                            <Button
                                color="secondary"
                                variant="contained"
                                size="large"
                                type="submit"
                                style={styles.button}
                            >
                                Confirm
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


export default FormUserPayment;