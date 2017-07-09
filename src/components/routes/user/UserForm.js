import './User.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { logonUser } from '../../../actions/login';

class UserForm extends Component {
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
    console.log(this.props)
    this.props.logonUser(values)
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={'animalForm'}>
        <h3>Informe os seus dados</h3>
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
            name="password"
            label="Senha"
            placeholder="Senha"
            type="text"
            component={this.renderField}
          />
          <Field
            name="photo"
            label="Foto"
            placeholder="Link para foto"
            type="text"
            component={this.renderField}
          />
          <Field
            name="phone"
            label="Telefone"
            placeholder="Telefone"
            component={this.renderField}
          />
          <Field
            name="email"
            label="Email"
            placeholder="Email"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Entrar</button>
          <Link to="/User" className="btn btn-danger">Cancelar</Link>
        </form>
      </div>

    );
  }
}

export default reduxForm({
    form: 'Userlkjfsdkjflkdsljdsklf'
})(
    connect(null, {logonUser})(UserForm)
);