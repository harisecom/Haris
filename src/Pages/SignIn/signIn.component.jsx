import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import FormInput from '../../Components/Form-input/FormInput.component';
import CustomButton from '../../Components/Custom-Button/CustomButton.component';

import './Sign-In.styles.css';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            firebaseErrors: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password:' '});
            this.props.history.push('/');
        } catch (err) {
            this.setState({firebaseErrors: err.message});
            console.error('something went wrong with sign in with email and password', err);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value});
    }

    render() {
        const {email, password, firebaseErrors} = this.state;
        return (
            <Fragment>
                <div className="sign-in">
                    <h2 className="headline">Sign in</h2>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name="email"
                            type="email"
                            value={email}
                            handleChange={this.handleChange}
                            placeholder="example@email.com"
                            label="Email Address" 
                        required/>
                        <FormInput 
                            name="password"
                            type="password"
                            value={password}
                            handleChange={this.handleChange}
                            placeholder="password"
                            label="Password"
                        required/>
                        <div className="button">
                            <CustomButton type="submit">Login</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                        </div>
                        <p className="error">{firebaseErrors}</p>
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