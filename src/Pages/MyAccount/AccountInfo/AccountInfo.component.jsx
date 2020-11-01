import React, { Component } from 'react'
import './account-info.styles.css';


class AccountInfo extends Component {

    constructor(){
        super();
        this.state = {
            displayName : '',
            email : '',
            shippingAddress: '',
            billingAddress: ''
        }

    }

    componentDidMount(){
        const {user, userInfo} = this.props;
        this.setState({
            displayName: user.displayName,
            email: user.email
        })

        if ( this.props.userInfo ){
            this.setState({
                shippingAddress: this.generateShippingAddress(userInfo),
                billingAddress: this.generateBillingAddress(userInfo)
            })
        }
    }

    generateShippingAddress = (values) => {
        const shippingAddress = `${values.address}, ${values.apartment ? values.apartment + ', ' : ''} ${values.city},  ${values.state}, ${values.postal}, ${values.country}`; 
        return shippingAddress;
    }

    generateBillingAddress = (values) => {
        const billingAddress = ` ${values.billingAddress}, ${values.billingApartment ? values.billingApartment + ', ' : ''} ${values.billingCity}, ${values.billingState}, ${values.billingPostal}, ${values.billingCountry} `;
        return  billingAddress
    }


    render(){

       const {displayName, email, shippingAddress, billingAddress} = this.state;     

        return (
            <div className="account-information">
                <p>Name: {displayName.split(/(?=[A-Z])/).join(' ')} </p>
                <p>Email : {email}</p>
                <p>Shipping Address: {shippingAddress} </p>
                <p>Billing Address: {billingAddress} </p>
            </div>
        )
    }
}
    
export default AccountInfo
