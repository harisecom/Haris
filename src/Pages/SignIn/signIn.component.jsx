import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import FormInput from '../../Components/Form-Input/FormInput.component';
import CustomButton from '../../Components/Custom-Button/CustomButton.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import './Sign-In.styles.css';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password:' '});
        } catch (err) {
            console.error('something went wrong with sign in with email and password', err);
        }
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
                        placeholder="example@email.com"
                        label="Email Address"
                        
                    required/>
                    <FormInput 
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        placeholder="password"
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
