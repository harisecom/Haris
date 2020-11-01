import React,{Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {List, ListItem} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { firestore } from "../../../firebase/firebase.utils";
import { clearCartItems } from '../../../Redux/cart/cart-action';
import { connect } from 'react-redux';

export class Confirm extends Component {
    firebaseUpdateUserData = async () =>{

        const { emailaddress, firstName, lastName, address, apartment, company, city, state, country, postal, billingFirstName, billingLastName, billingAddress, 
            billingCompany, billingApartment ,billingCity, billingState, billingCountry, billingPostal, billingPhone, phone
            } = this.props.values;

        const information = { emailaddress, firstName, lastName, address, apartment, company, city, state, country, postal, billingFirstName, billingLastName, billingAddress, 
            billingCompany, billingApartment ,billingCity, billingState, billingCountry, billingPostal, billingPhone, phone }

        const userRef = firestore.doc(`users/${this.props.userId}`);
        try {
            await userRef.update({
                additionalInfomation : information
            });
        } catch (err) {
            console.error('error uploading user additional info', err.message);
        }

    }

    creatingTheOrders = () => {
        const { cartItems, subTotal, shippingCost} = this.props;
        const { emailaddress, firstName, lastName, address, apartment,
        city, state, country, postal} = this.props.values;

        const orderNum = new Date().valueOf();
        this.props.orderNumberGenerator(orderNum);
        const myorderQueries = {
            emailaddress,
            firstName,
            lastName,
            cartItems,
            subTotal,
            shippingCost,
            orderNum,
            address,
            apartment,
            city,
            state,
            country,
            postal
        }
        return myorderQueries;
    }

    firebaseMyOrdersUpload = async (orderQuery) =>{
        const orderCollection = firestore.collection(`users/${this.props.userId}/myOrders`);
        const orderDoc = orderCollection.doc();
        try {
            await orderDoc.set({
                orderDetails : orderQuery
            })
        } catch (err) {
            console.error('error uploading user order', err.message);
        }
        this.props.removeCartItems();
    }

    continue = e => {
        e.preventDefault();
        // Here we will PROCESS FORM 

        const orderQuery = this.creatingTheOrders();


        if(this.props.values.saveShippingAddress){
            this.firebaseUpdateUserData();
        }

        this.firebaseMyOrdersUpload(orderQuery);
       
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        console.log(this.props.values.saveShippingAddress);
        const {
            values: {
                emailaddress, 
                firstName, lastName, address, apartment, city, state, country, postal,
                billingFirstName, billingLastName, billingAddress,  billingApartment ,billingCity, billingState, billingCountry, billingPostal,
                expiry, number,
            } 
        } = this.props;
        const {shippingType} = this.props;
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
                            {shippingType === '0' ? (
                                <span className="confirm-span">Free standard shipping (Approx. 6 - 10 business days)</span>
                            ) : shippingType === '6.95' ? (
                                <span className="confirm-span">Standard shipping (Approx. 3 - 5 business days)</span>
                            ) : shippingType === '17.0' ? (
                                <span className="confirm-span">Expedited 2-Day Shipping</span>
                            )  : (
                                ""
                            )}    
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

const mapStateToProp = ({shippingType}) => ({
    shippingType: shippingType.currentShippingType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeCartItems : () => dispatch(clearCartItems()),
    nextStep: ownProps.nextStep,
    prevStep: ownProps.prevStep,
    values: ownProps.values,
    userId: ownProps.userId,
    cartItems: ownProps.cartItems,
    subTotal: ownProps.subTotal,
    shippingCost: ownProps.shippingCost,
    orderNumberGenerator: ownProps.orderNumberGenerator
})


export default connect(mapStateToProp, mapDispatchToProps)(Confirm);