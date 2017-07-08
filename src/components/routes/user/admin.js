import './User.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { loginAdmin, loginUser } from '../../../actions';
import { loginStatus, loginMode } from '../../../reducers/login';
import AdminContainer from '../admin/AdminContainer';

class Admin extends Component {
    onSubmit(values) {
    }
    render() {
        return (
          <div> 
            <div>Area do admin</div>
            <AdminContainer />
          </div>
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