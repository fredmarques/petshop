import './User.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginStatus, loginMode } from '../../../reducers/login';
import Login from './login';
import Customer from './customer';
import Admin from './admin';

class User extends Component {

    render() {
        const { status, mode } = this.props;
        if(status && mode === 'admin'){
            return <Admin/>
        } else if(status && mode === 'user'){
            return <Customer/>
        }else{
            return <Login/>
        }
    }

}

const mapStateToProps = (state) => {
    return {
        status: loginStatus(state),
        mode: loginMode(state)
    }
};

export default connect(mapStateToProps)(User)
