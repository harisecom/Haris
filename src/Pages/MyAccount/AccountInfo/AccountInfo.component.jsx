import React from 'react'
import './account-info.styles.css';



const AccountInfo = (props) => {
    const {name, address, ordersCount} = props.value;
    return (
        <div className="account-information">
            <p>Name: {name} </p>
            <p>Email : ssrifat2277@gmail.com</p>
            <p>Shipping Address: {address} </p>
            <p>Billing Address: {address} </p>
            <p>Total Orders: {ordersCount}</p>
        </div>
    )
}

export default AccountInfo
