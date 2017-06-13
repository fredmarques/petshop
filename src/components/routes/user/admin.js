import './User.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { loginAdmin, loginUser } from '../../../actions';
import { loginStatus, loginMode } from '../../../reducers/login';

class Admin extends Component {
    onSubmit(values) {
    }
    render() {
        return (
            <div>Area do admin</div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        status: loginStatus(state),
        mode: loginMode(state)
    }
};

export default connect(mapStateToProps)(Admin)