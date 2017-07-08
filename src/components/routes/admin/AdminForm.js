import './Admin.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class AdminForm extends Component {
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
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={'adminForm'}>
        <h3>Cadastre um Administrador do sistema</h3>
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
            placeholder="Identificação"
            type="text"
            component={this.renderField}
          />
          <Field
            name="foto"
            label="Foto"
            placeholder="Link para foto"
            type="text"
            component={this.renderField}
          />
          <Field
            name="phone"
            label="Telefone"
            placeholder="Telefone"
            type="text"
            component={this.renderField}
          />
          <Field
            name="email"
            label="Email"
            placeholder="Email"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Entrar</button>
          <Link to="/user" className="btn btn-danger">Cancelar</Link>
        </form>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
    return {
    }
};

export default reduxForm({
    form: 'Admin'
})(
    connect(mapStateToProps, {})(AdminForm)
);