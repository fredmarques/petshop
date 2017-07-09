import './Animal.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { registerAnimal } from '../../../actions/animals';

class AnimalForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = '';
    return (
      <div className={className}>
        <input className="form-control"
          type={field.type}
          placeholder={field.placeholder}
          {...field.input} />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.registerAnimal(this.props.session, values)
    // values.name = '';
    // values.id = '';
    // values.age = '';
    // values.breed = '';
    // this.props.history.push('/user')
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={'animalForm'}>
        <h3>Cadastre seu pet</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className={'form-inline'}>
          <Field
            name="name"
            label="Nome"
            placeholder="Nome"
            type="text"
            component={this.renderField}
          />
          <Field
            name="id"
            label="ID"
            placeholder="ID"
            type="text"
            component={this.renderField}
          />
          <Field
            name="age"
            label="Idade"
            placeholder="Idade"
            type="text"
            component={this.renderField}
          />
          <Field
            name="breed"
            label="Raça"
            placeholder="Raça"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Entrar</button>
          <Link to="/" className="btn btn-danger">Cancelar</Link>
        </form>
      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session
  }
}

export default reduxForm({
    form: 'Animal'
})(
    connect(mapStateToProps, {registerAnimal})(AnimalForm)
);