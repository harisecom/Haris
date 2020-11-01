import React, { Component } from "react";
import FormUserInformation from "./Pages/FormUserInformation.component";
import FormUserPayment from "./Pages/FormUserPayment.component";
import FormUserShipping from "./Pages/FormUserShipping.component";
import CheckoutItem from './Components/CheckoutItem.component';
import Confirm from "./Pages/Confirm.component";
import Success from "./Pages/Success.component";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Checkout extends Component {

  constructor(){
    super();
    this.state = {
      //pages
      step: 1,
  
      //billing and shipping address information
      emailaddress: "",
      firstName: "",
      billingFirstName: "",
      lastName: "",
      billingLastName: "",
      company: "",
      billingCompany: "",
      address: "",
      billingAddress: "",
      apartment: "",
      billingApartment: "",
      city: "",
      billingCity: "",
      country: "",
      billingCountry: "",
      state: "",
      billingState: "",
      postal: "",
      billingPostal: "",
      phone: "",
      billingPhone: "",
  
      useShippingAsBilling: false,
      saveShippingAddress: false,
  
      //shipping options
      freeShipping: 0.0,
      standardShipping: 6.95,
      expressShipping: 17.0,
  
      //card information
      cvc: "",
      expiry: "",
      name: "",
      number: "",
  
      orderNum: '',
    }

  }
  

  componentDidMount = () => {
    /* fetch(
      "https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3/66.189.113.231"
    )
      .then((response) => {
        return response.json();
      }, "jsonp")
      .then((data) => {
        this.setState({
          city: data.city,
          billingCity: data.city,
          state: data.state,
          billingState: data.state,
          country: data.country_name,
          billingCountry: data.country_name,
          postal: data.postal,
          billingPostal: data.postal,
        });
      })
      .catch((err) => console.error(err)); */

    const additionalInformation = this.props.userInfo.additionalInfomation;

    console.log('User Info: ', additionalInformation);

      if(this.props.userInfo.additionalInfomation){
        this.setState({
        emailaddress: additionalInformation.emailaddress,
        firstName: additionalInformation.firstName,
        lastName: additionalInformation.lastName,
        company : additionalInformation.company,
        address : additionalInformation.address,
        apartment : additionalInformation.apartment ,
        city : additionalInformation.city,
        country : additionalInformation.country,
        state : additionalInformation.state,
        postal : additionalInformation.postal,
        phone : additionalInformation.phone,
        billingFirstName : additionalInformation.billingFirstName,
        billingLastName : additionalInformation.billingLastName,
        billingCompany : additionalInformation.billingCompany,
        billingAddress : additionalInformation.billingAddress,
        billingApartment : additionalInformation.billingApartment,
        billingCity : additionalInformation.billingCity,
        billingState : additionalInformation.billingState,
        billingCountry : additionalInformation.billingCountry,
        billingPostal : additionalInformation.billingPostal,
        billingPhone : additionalInformation.billingPhone 
      })
    }
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleSaveShippingAddress = () => {
    this.setState({saveShippingAddress: true});
  }

  handleChange = (input) => (event) => {
    const { value } = event.target;
    this.setState({ [input]: value });
  };
  
  orderNumberGenerator = (number) => {
    this.setState({orderNum: number})
  }

  handleToggleUseShippingAsBilling = () => {
    const { useShippingAsBilling } = this.state; //tell us if we will use shipping address as billing address
    const {
      firstName,
      lastName,
      company,
      address,
      apartment,
      city,
      country,
      state,
      postal,
      phone,
    } = this.state; //shipping address states
    const {
      billingCity,
      billingCountry,
      billingState,
      billingPostal,
    } = this.state; //billing address states

    //if the variable useShippingAsBilling is currently false, set it to 'true'
    // and set the billing address states to the shipping address states
    if (!useShippingAsBilling) {
      return this.setState({
        useShippingAsBilling: true,
        billingFirstName: firstName,
        billingLastName: lastName,
        billingCompany: company,
        billingAddress: address,
        billingApartment: apartment,
        billingCity: city,
        billingCountry: country,
        billingState: state,
        billingPostal: postal,
        billingPhone: phone,
      });
    }

    //if the variable useShippingAsBilling is currently true, set it to 'false'
    //and set the billing adress states to the input values
    return this.setState({
      useShippingAsBilling: false,
      billingFirstName: "",
      billingLastName: "",
      billingCompany: "",
      billingAddress: "",
      billingApartment: "",
      billingCity: billingCity,
      billingCountry: billingCountry,
      billingState: billingState,
      billingPostal: billingPostal,
      billingPhone: "",
    });
  };

  render() {

    const { step } = this.state;

    if (!this.props.userInfo) {
      return <Redirect to='/login' />
    }

    if(!this.props.cartItems.length && step < 3){
      return <Redirect to='/' />
    }

    console.log('Email address', this.state.emailaddress)
    console.log('address', this.state.address)


    
    const {
      emailaddress,
      firstName,
      lastName,
      company,
      address,
      apartment,
      city,
      state,
      country,
      postal,
      phone,
      saveShippingAddress,
    } = this.state;
    const {
      billingFirstName,
      billingLastName,
      billingCompany,
      billingAddress,
      billingApartment,
      billingCity,
      billingState,
      billingCountry,
      billingPostal,
      billingPhone,
      orderNum
    } = this.state;
    const { freeShipping, standardShipping, expressShipping } = this.state;
    const { cvc, expiry, name, number } = this.state;
    const values = {
      emailaddress,
      firstName,
      lastName,
      company,
      address,
      apartment,
      city,
      state,
      country,
      postal,
      phone,
      saveShippingAddress,
      billingFirstName,
      billingLastName,
      billingCompany,
      billingAddress,
      billingApartment,
      billingCity,
      billingState,
      billingCountry,
      billingPostal,
      billingPhone,
      freeShipping,
      standardShipping,
      expressShipping,
      cvc,
      expiry,
      name,
      number,
      orderNum
    };

    const subTotal = parseFloat( this.props.cartItems.reduce((accumulator, item) => (
      accumulator += (item.quantity * item.price)
    ), 0)).toFixed(2);

  

  const shippingCalculation = () => {
    switch (this.props.shippingType) {
      case null:
        return parseFloat(subTotal + 0)
        

      default:
        const shippingCost = parseFloat(subTotal) + parseFloat(this.props.shippingType)
        return parseFloat(shippingCost).toFixed(2)
    }
  }

  console.log();


    return (
      <div className="checkout-page">
        <div className="checkout-form-side">
          {step === 1 ? (
            <FormUserInformation
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              handleSaveShippingAddress={this.handleSaveShippingAddress}
              values={values}
            />
          ) : step === 2 ? (
            <FormUserShipping
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          ) : step === 3 ? (
            <FormUserPayment
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              handleToggleUseShippingAsBilling={
                this.handleToggleUseShippingAsBilling
              }
              values={values}
            />
          ) : step === 4 ? (
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              userId={this.props.userInfo.id}
              cartItems = {this.props.cartItems}
              subTotal = {subTotal}
              shippingCost = {this.props.shippingType}
              orderNumberGenerator = {this.orderNumberGenerator}
            />
          ) : step === 5 ? (
            <Success values={values} />
          ) : (
            ""
          )}
        </div>
        <div className={`checkout-payment-side ${ step !== 5 ? 'active' : ''}`}>
            {
              this.props.cartItems.map((item) => (
                <CheckoutItem key={item.id} item={item} />
              ))
            }
            <div className="checkout-calculation">
              <hr/>
              <div className="checkout-subtotal">
                <h3>Subtotal</h3>
                <span>$ {
                  subTotal
              }</span>
              </div>
              <div className="checkout-shipping">
              <h3>Shipping</h3>
              <span>{
                this.props.shippingType === null ?
                'Calculated at next step': 
                this.props.shippingType === '0' ?
                'FREE': `$ ${this.props.shippingType}`
              }</span>
              </div>
              <hr/>
              <div className="checkout-total-price">
               <h3>Total</h3>
               <span>$ {
                shippingCalculation()
               }</span>
              </div>
              
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

  cartItems : state.cart.cartItems,
  shippingType: state.shippingType.currentShippingType,
  userInfo : state.user.currentUser

})


export default connect(mapStateToProps)(Checkout);
