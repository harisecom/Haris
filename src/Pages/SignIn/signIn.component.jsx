import React,{Component} from 'react';
import {Link} from 'react-router-dom'

import FormInput from '../../Components/form-input/form-input.component';
import CustomButton from '../../Components/custom-button/custom-button.component';
import './signIn.styles.css'

class SignInPage extends Component {
    constructor() {
        super()

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
                    <CustomButton type="submit">Login</CustomButton>
                </form>
                <span>
                    <Link to='/forgotPassword'>Forgot Your Password?</Link>
                    <Link>Create an Account</Link>
                </span>
            </div>
        )
    }
}

export default SignInPage;