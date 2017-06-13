import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './Contact.css';


class Contact extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field
    const className = '';
    // console.log('className ', className);
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
    alert('Sua mensagem foi enviada!')
    // this.props.history.push('/'); // -> uncomment this line to redirect user to "/"(home)
    values.nome = '';
    values.email='';
    values.telefone = '';
    values.message = '';
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className={'contactForm'}>
          <h3>Entre em contato conosco</h3>
          <form className="form-group" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name="nome"
              type="text"
              component={
                  ({input}) => (
                      <input {...input} className="form-control" placeholder="Nome"/>
                  )}
            />
            <Field
              name="email"
              type="text"
              component={
                  ({input}) => (
                      <input {...input} className="form-control" placeholder="E-mail"/>
              
                  )}
            />
            <Field
              name="telefone"
              type="text"
              component={
                  ({input}) => (
                      <input {...input} className="form-control" placeholder="Telefone" />
                  )}
            />
            <Field
              name="message"
              type="input"
              component={
                ({ input }) => (
                  <textarea {...input} className="form-control message" rows="7" id="mensagem" placeholder="Mensagem" />)}
            />
            <br />
            <button className="btn btn-success">Enviar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'Contact'
})(
  connect(null, {})(Contact)
  );