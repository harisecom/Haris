import React from 'react';
import './order-details.css';
import OrderDetailsProduct from './OrderDetailsProduct/OrderDetailsProduct.component';

const OrderDetails = ({order, handleChange, userInfo}) => {
    const TotalCost = parseFloat(order.subTotal) + parseFloat(order.shippingCost);
    return (
        <div className="order-details">
                        {
                   
                        order.cartItems.map( (item, key) => (
                            <OrderDetailsProduct item = {item} key={key}/>
                        ))
                    
                    }
            <div className="order-details-calculation">
              <hr/>
              <div className="order-details-subtotal">
                <h3>Subtotal</h3>
                <span>$ {
                  order.subTotal
              }</span>
              </div>
              <div className="order-details-shipping">
              <h3>Shipping</h3>
              <span>{
                order.shippingCost
              }</span>
              </div>
              <hr/>
              <div className="order-details-total-price">
              <h3>Total</h3>
               <span>$ { parseFloat(TotalCost).toFixed(2) }</span>
              </div>
              <div className="order-details-contact-information">
                <h2>Contact Information</h2>
                <p>Name: {order.firstName} {order.lastName} <br/> Email: {order.emailaddress} </p>
              </div>
              <div className="order-details-shipping-address">
                <h2>Shipping Address</h2>
                <p>{order.address} {order.apartment} <br/> {order.city} <br/> {order.state}, {order.postal} <br/> {order.country}  </p>
              </div>
            </div>
            <button onClick={() => handleChange(1, '') }>Back To My Orders</button>
        </div>
    )
}

export default OrderDetails
