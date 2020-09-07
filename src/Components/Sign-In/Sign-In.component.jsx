import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom'

import FormInput from '../Form-Input/Form-Input.component';
import CustomButton from '../Custom-Button/Custom-Button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import './Sign-In.styles.css'

class SignInPage extends Component {
    constructor(props) {
        super(props);

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
                    <Link className="links" to="/signup">Forgot Your Password?</Link>
                    <Link className="links">Create an Account</Link>
                </span>
            </div>
            </Fragment>
            
        )
    }
}
export default SignInPage;