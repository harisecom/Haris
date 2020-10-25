import React from 'react';
import { useHistory } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import './Success.styles.css';
const Success = ({values}) => {
    let history = useHistory();
    
    return (
      <MuiThemeProvider>
        <div className="success-div">
            <h1>Thank You!</h1>
            <p>Your order #{values.orderNum} has been placed!</p>
            <span>We sent an email {values.emailaddress} to with your confirmation and receipt. 
                If the email hasn't arrived within two minutes, 
                please check you spam folder to see if the email was routed there.
            </span>
            <button  
                onClick={() => {history.push("/shop")}} 
            >
                Continue Shopping
            </button>
        </div>
      </MuiThemeProvider>
    );
}

export default Success;