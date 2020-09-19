import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom'

import FormInput from '../../Components/form-input/form-input.component';
import CustomButton from '../../Components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import './Sign-In.styles.css'

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value});
    }

    render() {
        return (
            <Fragment>
            <div className="sign-in">
                <h2 className="headline">Sign in</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email Address"
                    required/>
                    <FormInput 
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                    required/>
                    <div className="button">
                        <CustomButton type="submit">Login</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
                <span>
                    <Link className="links" to="/forgotPassword">Forgot Your Password?</Link>
                    <Link className="links" to="/signup">Create an Account</Link>
                </span>
            </div>
            </Fragment>
            
        )
    }
}
export default SignIn;
