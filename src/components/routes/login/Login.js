import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import  { connect } from 'react-redux';
import './Login.css';

class Login extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field
        const className = '';
        console.log('className ', className);
        return (
            <div className={className}>
                <input className="form-control"
                type={field.type}
                placeholder={field.placeholder}
                {...field.input}/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/');
        })
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className={'loginForm'}>
                <h3>Acesse sua conta</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className={'form-inline'}>
                    <Field
                        name="email"
                        label="Email"
                        placeholder="E-mail"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        name="password"
                        label="Password"
                        placeholder="Senha"
                        type="password"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Entrar</button>
                    <Link to="/" className="btn btn-danger">Cancelar</Link>
                </form>
            </div>
        );
    }

}

function validate(values){
    const errors = {};
    if(!values.email || values.email.indexOf('@') === -1) {
        errors.email = 'Por favor, digite um e-mail válido';
    }
    if(!values.password) {
        errors.password = 'Por favor, digite sua senha!';
    }
    return errors;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if (['foo@' ].includes(values.email)) {
      }
    })
}

export default reduxForm({
    validate,
    asyncValidate,
    form: 'Login'
})(
    connect(null, {})(Login)
);
