import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AnimalForm from './AnimalForm'
import AnimalList from './AnimalList';
import { deleteAnimal, updateAnimal } from '../../../actions/animals'

class AnimalContainer extends Component {
  render() {
    const { loginStatus, loginMode } = this.props;
    if (loginStatus && loginMode === 'user') {
      if (this.props.session && this.props.session.animalList && this.props.session.animalList.length > 0) {
        return (
          <div>
            <AnimalList 
              animals={this.props.session.animalList }
              delete={this.props.deleteAnimal } 
              update={this.props.updateAnimal }
              />
            <AnimalForm />
          </div>
        )
      } else {
        return (
          <div>
            <h3> Você ainda não possui nenhum animal cadastrado </h3>
            <br />
            <AnimalForm />
          </div>
        );

      }
    } else {
      return (
        <div>
          <h3>Você não esta logado ainda</h3>
          <Link to="/user" className="btn btn-primary">Login</Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.login.loginStatus,
    loginMode: state.login.loginMode,
    session: state.session
  }
};

export default connect(mapStateToProps, { deleteAnimal, updateAnimal })(AnimalContainer)