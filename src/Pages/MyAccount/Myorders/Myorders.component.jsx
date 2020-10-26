import React, { Component } from 'react'
import { connect } from 'react-redux'
import './myorders.styles.csss'

export class Myorders extends Component {
    constructor(){
        super()
    }

    populateUserData = async () => {
        const userOrders = firestore.collection(`users/${this.props.user.id}/myOrders`);
        userOrders.onSnapshot( snapshot=> {
            this.setState({ totalOrders : snapshot.docs.length});
            snapshot.docs.map( orders => {})
        })

        try {
            await userRef.update({
                additionalInfomation : this.props.values
            });
        } catch (err) {
            console.error('error uploading user additional info', err.message);
        }
    }

    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Myorders)
