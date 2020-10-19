import React,{Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {List, ListItem} from '@material-ui/core'
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Here we will PROCESS FORM 
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {
            values: {
                emailaddress, 
                firstName, lastName, address, apartment, city, state, country, postal,
                billingFirstName, billingLastName, billingAddress,  billingApartment ,billingCity, billingState, billingCountry, billingPostal,
                expiry, number
            } 
        } = this.props;
        const xnumber = number.replace(/.(?=.{4})/g, 'x');
    
        return (
            <MuiThemeProvider>
                <div className="checkout-div">
                    <List>
                        <h4>CONTACT</h4>
                        <ListItem>
                            <span className="confirm-span">{emailaddress}</span>
                        </ListItem>
                        <h4>SHIP TO</h4>
                        <ListItem>
                            <span className="confirm-span">{firstName} {lastName}</span>
                            <span className="confirm-span">{address}{apartment ? `, ${apartment}` : ''}{city ? `, ${city}` : ''}{state ? `, ${state}` : ''} {postal}, {country}</span>
                        </ListItem>
                        <h4>METHOD</h4>
                        <ListItem>
                            <span className="confirm-span"></span>
                        </ListItem>
                        <h4>BILL TO</h4>
                        <ListItem>
                            <span className="confirm-span">{billingFirstName} {billingLastName}</span>
                            <span className="confirm-span">{billingAddress}{billingApartment ? `, ${billingApartment}` : ''}{billingCity ? `, ${billingCity}` : ''}{billingState ? `, ${billingState}` : ''} {billingPostal}, {billingCountry}</span>
                        </ListItem>
                        <h4>CREDIT CARD</h4>
                        <ListItem>
                            <span className="confirm-span">{xnumber}</span>
                            <span className="confirm-span">Exp. Date: {expiry}</span>
                        </ListItem>
                    </List>
                    <br />
                    <Button
                        color="secondary"
                        size="medium"
                        onClick={this.back}
                        style={{
                            marginTop: "2rem"
                        }}
                    >
                        Return to payment
                    </Button>
                    <Button
                        color="secondary"
                        variant="contained"
                        size="large"
                        style={styles.button}
                        onClick={this.continue}
                    >
                        Pay Now
                    </Button>
                </div>
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
export default Confirm;