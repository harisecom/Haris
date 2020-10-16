import React, { Fragment } from 'react';
import { Link} from 'react-router-dom';
import {SignedInItems, SignedOutItems} from './MenuItems';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import './Dropdown.style.css';

const Dropdown = ({ currentUser}) => {
    console.log('user', currentUser);
    return (
        <ul className="dropdown-menus">
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
const mapStateToProp = ({user}) => ({
    currentUser: user.currentUser
});


export default connect(mapStateToProp)(Dropdown);