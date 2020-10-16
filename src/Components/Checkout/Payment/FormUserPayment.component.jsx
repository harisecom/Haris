import React, {Component, Fragment} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLable from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';


import BillingAddress from '../AddressForm';



export class FormUserPayment extends Component {

    state = {
        sameAddress: ''
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
        console.log('val', values);
        return (
            <MuiThemeProvider>
                <Fragment>
                    <h2>Payment</h2>
                    <div></div>
                    <h2>Billing Address</h2>
                    <RadioGroup name="billingAddress"  onChange={handleChange}>
                        <FormControlLable 
                            value="A"
                            control={<Radio 
                                icon={<FavoriteBorderIcon />} 
                                checkedIcon={<FavoriteIcon />}
                                onClick={(e) => this.radioHandler(1)}
                                onChange={handleToggleUseShippingAsBilling}
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
                </Fragment>
                <br />
                <Button
                    color="secondary"
                    variant="contained"
                    size="medium"
                    onClick={this.back}
                >
                    Return to shipping
                </Button>
                <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    onClick={this.continue}
                >
                    Pay now
                </Button>
            </MuiThemeProvider>
        )
    }
}
export default FormUserPayment;