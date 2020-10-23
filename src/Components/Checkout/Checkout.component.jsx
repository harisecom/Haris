import React, { Component } from 'react';
import FormUserInformation from './Pages/FormUserInformation.component';
import FormUserPayment from './Pages/FormUserPayment.component';
import FormUserShipping from './Pages/FormUserShipping.component';
import Confirm from './Pages/Confirm.component';
import Success from './Pages/Success.component';

export class Checkout extends Component {
    state = {
        //pages
        step: 1,

        //billing and shipping address information
        emailaddress: '',
        firstName: '',
        billingFirstName: '',
        lastName: '',
        billingLastName: '',
        company: '',
        billingCompany: '',
        address: '',
        billingAddress: '',
        apartment: '',
        billingApartment: '',
        city: '',
        billingCity: '',
        country: '',
        billingCountry: '',
        state: '',
        billingState: '',
        postal: '',
        billingPostal: '',
        phone: '',  
        billingPhone: '',

        useShippingAsBilling: false,

        //shipping options
        // shippingType: '',
        freeShipping: 0.00,
        standardShipping: 6.95,
        expressShipping: 17.00,

        //card information
        cvc: '',
        expiry: '',
        name: '',
        number: ''
    }

    

    componentDidMount = () => {
        fetch('https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3/66.189.113.231')
            .then( response => {
                return response.json()
            }, "jsonp")
            .then( data => {
                this.setState({
                    city: data.city,
                    billingCity: data.city,
                    state: data.state,
                    billingState: data.state,
                    country: data.country_name,
                    billingCountry: data.country_name,
                    postal: data.postal,
                    billingPostal: data.postal,
                })
            })
            .catch( err => console.error(err) )
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => event => {
        const {value} = event.target;
        this.setState({ [input] : value });
    }

    handleToggleUseShippingAsBilling = () => {
        const {useShippingAsBilling} = this.state; //tell us if we will use shipping address as billing address
        const {firstName, lastName, company, address, apartment, city, country, state, postal, phone} = this.state; //shipping address states
        const {billingCity, billingCountry, billingState, billingPostal} = this.state; //billing address states
        
        //if the variable useShippingAsBilling is currently false, set it to 'true'
        // and set the billing address states to the shipping address states 
        if(!useShippingAsBilling) {
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
                billingPhone: phone
            });
        }

        //if the variable useShippingAsBilling is currently true, set it to 'false'
        //and set the billing adress states to the input values 
        return this.setState({
            useShippingAsBilling: false,
            billingFirstName: '',
            billingLastName: '',
            billingCompany: '',
            billingAddress: '',
            billingApartment: '',
            billingCity: billingCity,
            billingCountry: billingCountry,
            billingState: billingState,
            billingPostal: billingPostal,
            billingPhone: '',
        });

    }

    render() {
        const { step } = this.state;
        const { emailaddress, firstName, lastName, company, address, apartment, city, state, country, postal, phone} = this.state;
        const {billingFirstName, billingLastName, billingCompany, billingAddress,  billingApartment, billingCity, billingState, billingCountry, billingPostal, billingPhone} = this.state;
        const {freeShipping, standardShipping, expressShipping} = this.state;
        const {cvc, expiry, name, number} = this.state;
        const values = { 
            emailaddress, firstName, lastName, company, address, apartment, city, state, country, postal, phone, 
            billingFirstName, billingLastName, billingCompany, billingAddress,  billingApartment, billingCity, billingState , billingCountry, billingPostal, billingPhone,
            freeShipping, standardShipping, expressShipping,
            cvc, expiry, name, number, 
        }

        switch(step) { 
           case 1: 
                return (
                    <FormUserInformation 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormUserShipping 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <FormUserPayment 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleToggleUseShippingAsBilling={this.handleToggleUseShippingAsBilling}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 5:
                return (
                    <Success 
                        values={values}
                    />
                );
        
        }
    }    
}  
export default Checkout;