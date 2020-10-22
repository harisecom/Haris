import React, {Fragment} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './Stripe-Button.styles.css';


const StripCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HNNXpJz8n8ysAkR8E6agherxjEoSmhI7HsK21gRnc8cmljW5NLYY4TG0x5fB2sPDbZy5eVNPMCEEmK6Df7LgG0z00RtYeYDuz';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful');
    }
    return (
        <Fragment>
        <span className="btn-div-span">Stripe Checkout</span>
        <div className="btn "> 
            <StripeCheckout 
                label='Stripe Pay'
                name='Haris'
                billingAddress
                shippingAddress
                image=''
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
        <div className="or">OR</div>
        </Fragment>
        
    )
}
export default StripCheckoutButton;