import React from 'react'
import './order-items.css'

const OrderItem = ({Item, queryNum, handleChange}) => {

    const cartQuantity = (cartItems) => {
        return cartItems.reduce((accumulator, item) => {
            return accumulator += item.quantity
        },0)
    }

    const {orderNum, cartItems, subTotal, shippingCost} = Item;
    const totalCost = parseFloat(shippingCost) + parseFloat(subTotal);
    return (

        <tr>
            <th scope="row">{queryNum}</th>
            <td>{orderNum}</td>
            <td>{ new Date(parseInt(orderNum)).toDateString() }</td>
            <td>{ cartItems.length }</td>
            <td>{ cartQuantity(cartItems) }</td>
            <td>{ parseFloat(totalCost).toFixed(2) }</td>
            <td><button onClick={() => handleChange(2, Item) }>Order Details</button></td>
        </tr>
       
    )
}

export default OrderItem
