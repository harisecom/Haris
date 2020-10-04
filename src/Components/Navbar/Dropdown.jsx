import React, { Fragment } from 'react';
import {SignedInItems, SignedOutItems} from './MenuItems';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import './Dropdown.style.css';

const Dropdown = ({ currentUser}) => {
    return (
        <ul className="dropdown-menus">
            {currentUser ? (
                <Fragment>
                <div>
                    {SignedInItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.path} >
                                    {item.title} 
                                </Link>
                            </li>
                        )
                    })}
                </div>
                </Fragment>
            ) : (
                <Fragment>
                <div>
                    {SignedOutItems.map((item, index) => {
                        return (
                            <li key={index}>
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
const mapStateToProp = state => ({
    currentUser: state.currentUser
});

export default connect(mapStateToProp)(Dropdown);