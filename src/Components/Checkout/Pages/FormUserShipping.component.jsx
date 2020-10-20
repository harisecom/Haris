import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {setShippingType} from '../../../Redux/shippingType/shippingType-action';
import {MuiThemeProvider} from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLable from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';

import '../Checkout.styles.css';

export class FormUserShipping extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleRadioChange = (e) => {
        this.props.setShippingType(e.target.value)
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                <div className="checkout-div">
                    <form onSubmit={this.continue}>
                        <h2>Shipping Method</h2>
                        <RadioGroup name="shippingType" value={this.props.shippingType} onChange={handleChange} className="radio-form checkout-div">
                            <FormControlLable 
                                value={values.freeShipping.toString()}
                                control={<Radio 
                                    icon={<FavoriteBorderIcon />} 
                                    checkedIcon={<FavoriteIcon />}
                                    onChange={this.handleRadioChange}
                                    required={true}
                                />}
                                label="Free standard shipping (Approx. 6 - 10 business days)"
                            />
                            <span className="shipping-span">Free</span>
                            <FormControlLable 
                                value={values.standardShipping.toString()}
                                control={<Radio 
                                    icon={<FavoriteBorderIcon />} 
                                    checkedIcon={<FavoriteIcon />}
                                    onChange={this.handleRadioChange}
                                    required={true}
                                />}
                                label="Standard shipping (Approx. 3 - 5 business days)"
                            />
                            <span className="shipping-span">${values.standardShipping}</span>
                            <FormControlLable 
                                value={values.expressShipping.toString()}
                                control={<Radio 
                                    icon={<FavoriteBorderIcon />} 
                                    checkedIcon={<FavoriteIcon />}
                                    onChange={this.handleRadioChange}
                                    required={true}
                                />}
                                label="Expedited 2-Day Shipping (Same day processing on orders made by 2pm EST; excludes weekends and holidays)"
                            />
                            <span className="shipping-span">${values.expressShipping.toFixed(2)}</span>
                        </RadioGroup>
                        <br />
                        <Button
                            color="secondary"
                            size="medium"
                            onClick={this.back}
                            style={{
                                marginTop: "2rem"
                            }}
                        >
                            Return to information
                        </Button>
                        <Button
                            color="secondary"
                            variant="contained"
                            size="large"
                            style={styles.button}
                            type="submit"
                        >
                            Continue to payment
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
const mapStateToProp = ({shippingType}) => ({
    shippingType: shippingType.currentShippingType
});

const mapDispatchToProps = dispatch => ({
    setShippingType: shippingType => dispatch(setShippingType(shippingType))
});


export default connect(mapStateToProp, mapDispatchToProps)(FormUserShipping);