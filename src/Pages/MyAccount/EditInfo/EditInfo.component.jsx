import React, { Component } from 'react'
import './edit-info.styles.css'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

class EditInfo extends Component {
    constructor(){
        super()
        this.state = {

            company: '',
            address: '',
            apartment: '',
            city: '',
            state: '',
            country: '',
            postal: '',
            billingCompany: '',
            billingAddress: '',
            billingApartment: '',
            billingCity: '',
            billingState: '',
            billingCountry: '',
            billingPostal: ''

        }
    }

    componentDidMount(){

        let userInfo = this.props.userInfo;

        if(userInfo) {
            this.setState({

                company: userInfo.company,
                address: userInfo.address,
                apartment: userInfo.apartment,
                city: userInfo.city,
                state: userInfo.state,
                country: userInfo.country,
                postal: userInfo.postal,
                billingCompany: userInfo.billingCompany,
                billingAddress: userInfo.billingAddress,
                billingApartment: userInfo.billingApartment,
                billingCity: userInfo.billingCity,
                billingState: userInfo.billingState,
                billingCountry: userInfo.billingCountry,
                billingPostal:userInfo.billingPostal
    
            })
        }
        
    }

    handleChange = input => event =>{
        this.setState({ [input] : event.target.value})
    }
    render(){
        const { company, address, apartment, city, state, country, postal, billingCompany, billingAddress, billingApartment, billingCity, billingState, billingCountry, billingPostal } = this.state;
        console.log('Edit Address: ', address);
        console.log('Apartment: ', apartment);
        return (
            <div className="edit-info">
                <form onSubmit={this.continue}>
                    <div className="editable-information">
                        {/* <div className="my-information">
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
                                label= "Current Password"
                                type="password"
                                onChange={this.handleChange('password')}
                                defaultValue={password}
                                margin="normal"
                                variant="outlined"
                                required
                                fullWidth
                            />
                        </div> */}

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
                                type="string"
                                onChange={this.handleChange('address')}
                                value={address}
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
                                defaultValue={apartment}
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
                            
                        </div>




                        <div className="billing-address">
                            <h3>Billing Address</h3>
                            <TextField 
                                label="Company (optional)"
                                type="string"
                                onChange={this.handleChange('billingCompany')}
                                defaultValue={billingCompany}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                            <br />
                            <TextField 
                                label="Address"
                                type="string"
                                onChange={this.handleChange('billingAddress')}
                                value={billingAddress}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <br />
                            <TextField 
                                label="Apartment, suite, etc. (optional)"
                                type="string"
                                onChange={this.handleChange('billingApartment')}
                                defaultValue={billingApartment}
                                variant="outlined"
                                margin="normal"
                                fullWidths
                            />
                            <br />
                            <TextField 
                                label="city"
                                type="string"
                                onChange={this.handleChange('billingCity')}
                                value={billingCity}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <br />
                            <TextField
                                label="Country/Region"
                                type="string"
                                onChange={this.handleChange('billingCountry')}
                                value={billingCountry}
                                variant="outlined" 
                                margin="normal"
                                required    
                            />
                            <TextField
                                label="State"
                                type="string"
                                onChange={this.handleChange('billingState')}
                                value={billingState}
                                variant="outlined"
                                margin="normal"
                                required
                            />  
                            <TextField 
                                label="Zip code"
                                type="number"
                                onChange={this.handleChange('billingPostal')}
                                value={billingPostal}
                                variant="outlined"
                                margin="normal"
                                required
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


const mapStateToProps = ({user}) => ({
    user: user.currentUser
})

export default connect(mapStateToProps)(EditInfo)
