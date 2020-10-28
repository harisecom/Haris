import React, { Component } from 'react'
import './MyAccount.styles.css';
import AccountInfo from './AccountInfo/AccountInfo.component';
import EditInfo from './EditInfo/EditInfo.component';
import Myorders from './Myorders/Myorders.component'
import CircularProgress from '@material-ui/core/CircularProgress';
import { auth } from '../../firebase/firebase.utils';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';


class MyAccount extends Component {

    constructor(){
        super()
        this.state = {
            user : null,
            userInfo : null,
            userID : null,
            page: 'account-info'
        }
    }

    componentDidMount(){
        let user = this.props.user;
        if(user){
            this.setState({user : user});
            this.setState({userID: user.id});
            this.setState({ userInfo: user.additionalInfomation})
        }
    }

    componentDidUpdate(prevProps, prevState){
        let user = this.props.user;
        let userID = this.props.user.id;

        if(user.id && prevState.userID !== user.id){
            this.setState({user : user});
            this.setState({userID: userID});
            this.setState({ userInfo: user.additionalInfomation})
        }
        
    }
    
    /* componentWillUpdate(nextProps, nextState){
        let userInfo = this.props.user?.additionalInfomation;
        console.log('after the render', this.props.user);
        if(this.props.userInfo && nextState.userInfo !== userInfo){
            this.setState({userInfo: userInfo})
        }
    } */

    handleChange = (value) =>{
        this.setState({page: value});
    }
    render(){
        const {user, userInfo}  = this.state;
        const {page} = this.state;
        
        if(user){
            return (
                <div className="myaccount-page">
                    <h2>Welcome, {user.displayName} </h2>
                    <div className="user-details">
                            <div className="user-menus">
                                <ul>
                                    <li onClick={() => this.handleChange('account-info')} className={ page === 'account-info' ? 'active' : ''}>Account Information</li>
                                    <li onClick={() => this.handleChange('edit-info')} className={ page === 'edit-info' ? 'active' : ''}>Edit Information</li>
                                    <li onClick={() => this.handleChange('my-orders')} className={ page === 'my-orders' ? 'active' : ''}>My Orders</li>
                                    <li onClick= { ()=> {auth.signOut(); this.props.history.push('/')} }>Logout</li>
                                </ul>
                            </div>
    
                            <div className="information-showcase">
                                {
                                    page === 'account-info' ?
                                    <AccountInfo user= {user} userInfo = {userInfo} /> :
                                    page === 'edit-info' ?
                                    <EditInfo user= {user} userInfo = {userInfo} /> :
                                    page === 'my-orders' ?
                                    <Myorders user= {user}  userInfo = {userInfo} /> : '' 
                                }
                            
                            </div>
                    </div>
                </div>
            )
        }
    
        return (
            <div className="myaccount-spinner"> 
                <CircularProgress color="secondary" />
            </div>
        )
        
        
    }
}

const mapStateToProps = ({user}) => ({
    user : user.currentUser
})

export default withRouter(connect(mapStateToProps)(MyAccount))
