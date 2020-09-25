import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import FormInput from '../../Components/Form-Input/FormInput.component';
import CustomButton from '../../Components/Custom-Button/CustomButton.component'
import './Sign-Up.styles.css'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            birthday: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { firstName, lastName, email, password, birthday} = this.state;

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { firstName, lastName, birthday });

            this.setState({ firstName:'', lastName:'', email:'', password:'', birthday:''});

        } catch(err) {
            console.error(err);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const {firstName, lastName, email, password, birthday} = this.state
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
                            required/>
                            <FormInput 
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={this.handleChange}
                                placeholder="lastName"
                                label= 'Last Name'
                            required/>
                        </div>
                        <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            placeholder="example@email.com"
                            label= 'Email Address'
                        required/>
                        <FormInput 
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            placeholder="password"
                            label= 'Password'
                        required/>
                        <FormInput 
                            type="date"
                            name="birthday"
                            value={birthday}
                            onChange={this.handleChange}
                        />
                    </form>
                    <CustomButton type="submit">Sign Up</CustomButton>
                <span>
                   <Link className="links" to="/forgotPassword">Forgot your password?</Link>
                   <Link className="links" to="/signin">Sign in</Link>  
                </span>

            </div>
        )
    }
}
export default SignUp;