import React, { Component } from 'react'
import { connect } from 'react-redux'
import './myorders.styles.css'
import {  firestore } from "../../../firebase/firebase.utils";
import OrderItem from './orderItems/OrderItem.component';
import OrderDetails from './OrderDetails/OrderDetails.component';

export class Myorders extends Component {
    constructor(){
        super();
        this.state = {
            orders : '',
            page: 1,
            orderDetails: ''
        }
    }

    componentDidMount(){

        const userOrders = firestore.collection(`users/${this.props.user.id}/myOrders`);
        if(userOrders){
            userOrders.onSnapshot(async snapshot=> {
                this.setState({orders : snapshot.docs});
            })
        }
    }


    handleChange = (page, value) => {
        this.setState({page: page});
        this.setState({ orderDetails: value})
    }
      

    
    render() {
        if (this.state.page === 1){
        return (
            <div className="my-orders">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Order Number</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Products</th>
                    <th scope="col">Qantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Order Details</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                this.state.orders ?
                <>
                {
                    this.state.orders.map( (doc, key) => (
                        <OrderItem Item = {doc.data().orderDetails} key={key} queryNum = {key} handleChange={this.handleChange} />
                    ))

                   
                }
                </> : ''
                }
                </tbody>
                </table>
                
                    
                
            


               
            </div>
        )}
        return (
            <div>
                <OrderDetails order={this.state.orderDetails} handleChange={this.handleChange} userInfo= {this.props.userInfo}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Myorders)
