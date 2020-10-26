import React, { Component } from 'react'
import './account-info.styles.css';
import { firestore } from "../../../firebase/firebase.utils";
import { connect } from 'react-redux';


class AccountInfo extends Component {

    constructor(){
        super();
        this.state = {
            name : '',
            shippingAddress: '',
            billingAddress: '',
            totalOrders: ''
        }
    }


    componentDidMount(){
        

    }

    populateData = (data) => {
        this.setState({name: data.displayName});
        const { address, apartment, city, state, postal, country} = data.additionalInfomation;

        const shippingAddress = `${address}, ` + `${apartment ? apartment + ', ' : ''}`  + `${city}, `  + `${state}, ` + `${postal}, ` + `${country}, `; 
        this.setState({shippingAddress});
    }

    render(){
        const { user } = this.props;
        
        if(user){
            const userRef = firestore.doc(`users/${user.id}`);
            userRef.get().then( doc => {
                const data = doc.data();
                this.populateData(data)
                
            });
        }             

        const {name, shippingAddress, billingAddress, totalOrders} = this.state;
        return (
            <div className="account-information">
                <p>Name: {name} </p>
                <p>Email : ssrifat2277@gmail.com</p>
                <p>Shipping Address: {shippingAddress} </p>
                <p>Billing Address: {billingAddress} </p>
                <p>Total Orders: {totalOrders}</p>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    user : state.user.currentUser
})


export default connect(mapStateToProps)(AccountInfo)
