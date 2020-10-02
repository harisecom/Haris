import React, { useState, Fragment } from 'react';
import {SignedInItems, SignedOutItems} from './MenuItems';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import './Dropdown.style.css';

const Dropdown = ({ currentUser}) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <ul className="dropdown-menus">
            {currentUser ? (
                <Fragment>
                <div>
                    {SignedInItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
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
                                <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
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
