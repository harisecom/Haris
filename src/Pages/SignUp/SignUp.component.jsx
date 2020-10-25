import React,{Component} from 'react'
import {Link, Redirect} from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../../Components/form-input/FormInput.component';
import CustomButton from '../../Components/Custom-Button/CustomButton.component';

import './Sign-Up.styles.css'
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            birthday: '',
            firebaseErrors: ''
        };
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        console.log('submit was fired');
        event.preventDefault();

        const { firstName, email, password } = this.state;

        try {
            const { user } = await auth.createUserWithEmailAndPassword( email, password);

            createUserProfileDocument(user, {displayName: firstName});
            this.setState({ firstName:'', lastName:'', email:'', password:'', birthday:''});
        } catch(err) {
            this.setState({firebaseErrors: err.message});
            console.error('something went wrong with sign up with email and password', err);
        }
        
    };

    render() {
        if(this.props.user){
           return  <Redirect to="/" />
        }

        const {firstName, lastName, email, password, birthday, firebaseErrors} = this.state
        return (
            <div className="sign-up">
                <h2 className="headline">Create Account</h2>
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                        <div className="fullname-container">
                            <FormInput 
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={this.handleChange}
                                placeholder="firstName"
                                label= 'First Name'
                                required
                            />
                            <FormInput 
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={this.handleChange}
                                placeholder="lastName"
                                label= 'Last Name'
                                required
                            />
                        </div>
                        <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            placeholder="example@email.com"
                            label= 'Email Address'
                            required
                        />
                        <FormInput 
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            placeholder="password"
                            label= 'Password'
                            required
                        />
                        <FormInput 
                            type="date"
                            name="birthday"
                            value={birthday}
                            onChange={this.handleChange}
                        />
                        <CustomButton type='submit'>Sign Up</CustomButton>
                        <p className="error">{firebaseErrors}</p>
                    </form>
                <span>
                   <Link className="links" to="/forgotPassword">Forgot your password?</Link>
                   <Link className="links" to="/login">Sign in</Link>  
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser
})
export default connect(mapStateToProps)(SignUp);