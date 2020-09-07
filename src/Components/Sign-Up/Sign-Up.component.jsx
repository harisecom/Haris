import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import FormInput from '../Form-Input/Form-Input.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import './Sign-Up.styles.css'


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
        this.setState({ firstName:'', lastName:'', email:'', password:'', birthday:''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const {firstName, lastName, email, password, birthday} = this.state
        console.log('bitch');
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
                                label= 'First Name'
                            required/>
                            <FormInput 
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={this.handleChange}
                                label= 'Last Name'
                            required/>
                        </div>
                        <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            label= 'Email Address'
                        required/>
                        <FormInput 
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
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
                   <Link className="links">Forgot your password?</Link>
                   <Link className="links">Sign in</Link>  
                </span>

            </div>
        )
    }
}
export default SignUp;