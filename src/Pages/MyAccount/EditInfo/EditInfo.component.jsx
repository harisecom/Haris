import React, { Component } from 'react'
import './edit-info.styles.css'
import TextField from '@material-ui/core/TextField';

class EditInfo extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            company: '', 
            address : '',
            extraAddress : '',
            city : '',
            country : '',
            state : '',
            postal : '',
            phone : ''

        }
    }

    handleChange = input => event =>{
        this.setState({ [input] : event.target.value})
    }
    render(){
        const {email, firstName, lastName, company, address, extraAddress, city, country, state, postal, phone} = this.state;
        return (
            <div className="edit-info">
                <form onSubmit={this.continue}>
                    <div className="editable-information">
                        <div className="my-information">
                            <h3>My Information</h3>
                            <TextField 
                                label="First name"
                                type="string"
                                onChange={this.handleChange('firstName')}
                                defaultValue={firstName}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <TextField 
                                label="Last name"
                                type="string"
                                onChange={this.handleChange('lastName')}
                                defaultValue={lastName} 
                                variant="outlined"   
                                margin="normal"
                                fullWidth
                                required
                            />
                            <TextField 
                                label= "Email"
                                type="email"
                                onChange={this.handleChange('emailaddress')}
                                defaultValue={email}
                                margin="normal"
                                variant="outlined"
                                required
                                fullWidth
                            />
                            <TextField 
                                label= "Password"
                                type="password"
                                onChange={this.handleChange('emailaddress')}
                                defaultValue={email}
                                margin="normal"
                                variant="outlined"
                                required
                                fullWidth
                            />
                        </div>

                        <div className="shipping-address">
                            <h3>Shipping Address</h3>
                            <TextField 
                                label="Company (optional)"
                                type="string"
                                onChange={this.handleChange('company')}
                                defaultValue={company}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                            <br />
                            <TextField 
                                label="Address"
                                onChange={this.handleChange('address')}
                                defaultValue={address}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <br />
                            <TextField 
                                label="Apartment, suite, etc. (optional)"
                                type="string"
                                onChange={this.handleChange('apartment')}
                                defaultValue={extraAddress}
                                variant="outlined"
                                margin="normal"
                                fullWidths
                            />
                            <br />
                            <TextField 
                                label="city"
                                type="string"
                                onChange={this.handleChange('city')}
                                value={city}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <br />
                            <TextField
                                label="Country/Region"
                                type="string"
                                onChange={this.handleChange('country')}
                                value={country}
                                variant="outlined" 
                                margin="normal"
                                required    
                            />
                            <TextField
                                label="State"
                                type="string"
                                onChange={this.handleChange('state')}
                                value={state}
                                variant="outlined"
                                margin="normal"
                                required
                            />  
                            <TextField 
                                label="Zip code"
                                type="number"
                                onChange={this.handleChange('postal')}
                                value={postal}
                                variant="outlined"
                                margin="normal"
                                required
                            />
                            <br />
                            <TextField 
                                label="Phone Number (optional)"
                                type="tel"
                                onChange={this.handleChange('phone')}
                                defaultValue={phone}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                    </div>

                    <button type='submit' className="update-button">
                        Update Informations
                    </button>
                </form>
            </div>
        )
    }
}

export default EditInfo
