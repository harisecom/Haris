import React from 'react';
import './forgot-password.styles.css'

const ForgotPassword = () => {
    return (
        <div className="container forgot-password-page">
            <h3>Reset your password</h3>
            <h5 className="forgot-password-desc">We will send you an email to reset your password</h5>
            <hr className="forgot-password-line"></hr>
            <form>
                <div className="form-group forgot-email">
                    <label className="forgot-email-label" >Email Address</label>
                    <input id="email" className="form-control forgot-email-input" type="email" placeholder="Email Address"></input>
                </div>
                <button type="submit">Submit</button>
                <button>Cancel</button>

            </form>
        </div>
    )
}

export default ForgotPassword;