import React,{Component, Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import FormInput from '../../Components/Form-Input/FormInput.component';
import CustomButton from '../../Components/Custom-Button/CustomButton.component';

import './Sign-In.styles.css';
import { connect } from 'react-redux';

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

        if(this.props.user){
            return  <Redirect to="/" />
         }

        const {email, password, firebaseErrors} = this.state;
        return (
            <Fragment>
                <div className="sign-in">
                    <h2 className="headline">Sign In</h2>
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
                    </form>
                    <span>
                        <Link className="links" to="/forgotPassword">Forgot Your Password?</Link>
                        <Link className="links" to="/register">Create an Account</Link>
                    </span>
                </div>
            </Fragment>  
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser
})
export default connect(mapStateToProps)(SignIn);