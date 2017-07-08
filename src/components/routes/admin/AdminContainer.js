import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminForm from './AdminForm'

class AnimalContainer extends Component {
  render() {
    console.log('this.props: ', this.props)
    const { loginStatus, loginMode } = this.props;
    if (loginStatus && loginMode === 'admin') {
      return (
        <AdminForm/>
      );
    } else {
      return (
        <div>
          <h3>Você não esta logado ainda</h3>
          <Link to="/user" classType="btn btn-primary">Login</Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
    return {
      loginStatus: state.login.loginStatus,
      loginMode: state.login.loginMode 
    }
};

export default connect(mapStateToProps, {})(AnimalContainer)