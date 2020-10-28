import React from 'react';
import './order-details.css';
import OrderDetailsProduct from './OrderDetailsProduct/OrderDetailsProduct.component';

const OrderDetails = ({order, handleChange, userInfo}) => {
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
               <span>$ {
                parseFloat(order.subTotal) + parseFloat(order.shippingCost)
               }</span>
              </div>
              <div className="order-details-shipping-address">
                <h2>Shipping Address</h2>
                <p>{userInfo.address} {userInfo.apartment} <br/> {userInfo.city} <br/> {userInfo.state}, {userInfo.postal} <br/> {userInfo.country}  </p>
              </div>
            </div>
            <button onClick={() => handleChange(1, '') }>Back To My Orders</button>
        </div>
    )
}

export default OrderDetails
