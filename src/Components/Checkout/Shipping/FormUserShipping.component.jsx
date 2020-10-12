import React, {Component, Fragment} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLable from '@material-ui/core/FormControlLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';


export class FormUserShipping extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <h2>Shipping Method</h2>
                    <RadioGroup name="shippingType" value={values.shippingType} onChange={handleChange}>
                        <FormControlLable 
                            value={values.freeShipping.toString()}
                            control={<Radio 
                                icon={<FavoriteBorderIcon />} 
                                checkedIcon={<FavoriteIcon />}
                            />}
                            label="Free standard shipping (Approx. 6 - 10 business days)"
                        />
                        <span>Free</span>
                        <FormControlLable 
                            value={values.standardShipping.toString()}
                            control={<Radio 
                                icon={<FavoriteBorderIcon />} 
                                checkedIcon={<FavoriteIcon />}
                            />}
                            label="Standard shipping (Approx. 3 - 5 business days)"
                        />
                        <span>${values.standardShipping}</span>
                        <FormControlLable 
                            value={values.expressShipping.toString()}
                            control={<Radio 
                                icon={<FavoriteBorderIcon />} 
                                checkedIcon={<FavoriteIcon />}
                            />}
                            label="Expedited 2-Day Shipping (Same day processing on orders made by 2pm EST; excludes weekends and holidays)"
                        />
                        <span>${values.expressShipping.toFixed(2)}</span>
                    </RadioGroup>
                </Fragment>
                <br />
                <Button
                    color="secondary"
                    variant="contained"
                    size="medium"
                    onClick={this.back}
                >
                    Return to information
                </Button>
                <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    onClick={this.continue}
                >
                    Continue to payment
                </Button>
            </MuiThemeProvider>
        )
    }
}
export default FormUserShipping;