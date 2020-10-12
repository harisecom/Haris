import React, { Component } from 'react';
import FormUserInformation from './Information/FormUserInformation.component';
import FormUserPayment from './Payment/FormUserPayment.component';
import FormUserShipping from './Shipping/FormUserShipping.component';
// import Confirm from './Confirm/Confirm.component';
// import Success from './Success/Success.component';

export class Checkout extends Component {
    state = {
        step: 1,
        emailaddress: '',
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        apartment: '',
        city: '',
        country: '',
        state: '',
        postal: '',
        phone: '',  
        shippingType: '',
        freeShipping: 0.00,
        standardShipping: 6.95,
        expressShipping: 17.00,
    }

    componentDidMount = () => {
        // const getUserGeolocationDetails = () => {
            fetch('https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3/66.189.113.231')
                .then( response => {
                    return response.json()
                }, "jsonp")
                .then( data => {
                    console.log('data', data)
                    this.setState({
                        city: data.city,
                        state: data.state,
                        country: data.country_name,
                        postal: data.postal,
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

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name] : value });
    }

    render() {
        const { step } = this.state;
        const { emailaddress, firstName, lastName, company, address, apartment, city, state, country, postal, phone, freeShipping, standardShipping, expressShipping,  } = this.state;
        const values = { emailaddress, firstName, lastName, company, address, apartment, city, state, country, postal, phone, freeShipping, standardShipping, expressShipping }

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
                        values={values}
                    />
                );
            // case 4:
            //     return (
            //         <Confirm />
            //     );
            // case 5:
            //     return (
            //         <Success />
            //     );
        
        }
    }    
}  
export default Checkout;