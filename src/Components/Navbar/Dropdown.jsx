import React, { Fragment } from 'react';
import { Link} from 'react-router-dom';
import {SignedInItems, SignedOutItems} from './MenuItems';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import {accountbarAction} from '../../Redux/accountbar/accountbar-action';
import './Dropdown.style.css';


const Dropdown = ({ currentUser, accountbarStatus }) => {
    console.log('account', accountbarStatus === true);
    return (
        <ul className={`dropdown-menus ${accountbarStatus === true ? 'dropdown-active' : ''}`}>
            {currentUser ? (
                <Fragment>
                    {SignedInItems.map((item, index) => {
                        return (
                            <li key={index} className="dropdown-link child">
                                {
                                    item.title === 'Logout' ? 
                                    <Link className={item.cName} onClick={() => auth.signOut()} >
                                        {item.title} 
                                    </Link> :
                                    <Link className={item.cName} to={item.path} >
                                        {item.title} 
                                    </Link>
                                }
                                
                            </li>
                        )
                    })}     
                </Fragment>
            ) : (
                <Fragment>
                    <div>
                        {SignedOutItems.map((item, index) => {
                            return (
                                <li key={index} className="child">
                                    <Link className={item.cName} to={item.path} >
                                        {item.title}
                                    </Link>
                                </li>  
                            )
                        })}
                    </div>
                </Fragment>
            )}
        </ul>
    );
}
const mapStateToProp = ({user, accountbar}) => ({
    currentUser: user.currentUser,
    accountbarStatus: accountbar.accountbarStatus
})

const mapDispatchToProps = dispatch => ({
    accountbarAction: () => dispatch(accountbarAction())
})


export default connect(mapStateToProp, mapDispatchToProps)(Dropdown);