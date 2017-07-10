import React, { Component } from 'react';
import * as types from '../../../constants/ActionTypes'
import { logout } from '../../../actions/login';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Logout extends Component {

    render() {
        return (
            <li id="logoutButton" onClick={this.props.logout}>
                <Link to="/">Logout</Link>
            </li>
        );
    }
}

export default connect(null, { logout })(Logout)