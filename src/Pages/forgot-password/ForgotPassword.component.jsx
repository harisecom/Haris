import React, { useState, useRef } from 'react';
import {auth} from '../../firebase/firebase.utils';
import {Alert} from '@material-ui/lab'
import {AlertTitle} from '@material-ui/lab';
import './forgot-password.styles.css'
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
    const emailRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const history = useHistory();

    const handleSubmit = async event => {  
        event.preventDefault();
        try{
            setMessage('')
            setError('')
            setLoading(true)
            await auth.sendPasswordResetEmail(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }
    }
    return (
        <div className="forgot-password-page">
            <h3>Reset your password</h3>
            <h5 className="forgot-password-desc">We will send you an email to reset your password</h5>
            
            { error && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>}
            { message && <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                {message}
            </Alert>}
            <form onSubmit={handleSubmit}>
                <div className="form-group forgot-email">
                    <label className="forgot-email-label" >Email Address</label>
                    <input id="email" className="form-control forgot-email-input" type="email" placeholder="Email Address" ref={emailRef}></input>
                </div>
                <button className="reset-password-btn reset-submit" type="submit" disabled={loading}>Reset Password</button>
                <button className="reset-password-btn reset-cancel" onClick={() => {history.push('/login')}}>Cancel</button>
            </form>
        </div>
    )
}

export default ForgotPassword;