import React, { Component } from 'react';
import * as types from '../../../constants/ActionTypes'
import { logout } from '../../../actions/login';
import { connect } from 'react-redux';

class Logout extends Component {

    render() {
        return (
            <li id="logoutButton" onClick={this.props.logout}>
                <a> 
                    Logout
                </a>
            </li>
        );
    }
}

export default connect(null, { logout })(Logout)