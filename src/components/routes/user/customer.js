import './User.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { loginAdmin, loginUser } from '../../../actions';
import { loginStatus, loginMode } from '../../../reducers/login';
import AnimalContainer from '../animal/AnimalContainer'

class Customer extends Component {

    render() {
        return (
            <div>
              <h3>Area do cliente</h3> 
              <AnimalContainer />
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

export default connect(mapStateToProps)(Customer);
