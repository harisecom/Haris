import React, { Component } from 'react'
import './MyAccount.styles.css';
import AccountInfo from './AccountInfo/AccountInfo.component';
import EditInfo from './EditInfo/EditInfo.component'

import { auth } from '../../firebase/firebase.utils';
import { withRouter } from "react-router-dom";


class MyAccount extends Component {
    constructor(){
        super()
        this.state = {
            name : 'Sabbir Rifat',
            address: '221B Baker Street, England, United Kingdom',
            ordersCount: '20',
            page : 'account-info'
        }
    }

    handleChange = (value) =>{
        this.setState({page: value});
    }
    render(){
        const {page} = this.state;
        return (
            <div className="myaccount-page">
                <h1>My Account</h1>
                <h2>Welcome, {this.state.name}</h2>
                <div className="user-details">
                    <div className="user-menus">
                        <ul>
                            <li onClick={() => this.handleChange('account-info')}>Account Information</li>
                            <li onClick={() => this.handleChange('edit-info')}>Edit Information</li>
                            <li onClick={() => this.handleChange('my-orders')}>My Orders</li>
                            <li onClick={ () => { auth.signOut(); this.props.history.push('/')} }  >Logout</li>
                        </ul>
                    </div>

                    <div className="information-showcase">
                        {
                            page === 'account-info' ?
                            <AccountInfo value= {this.state} /> :
                            page === 'edit-info' ?
                            <EditInfo /> :
                            page === 'my-orders' ?
                            <EditInfo /> : '' 
                        }
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MyAccount)
