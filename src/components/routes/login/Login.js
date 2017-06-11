import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import  { connect } from 'react-redux';

class Login extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field
        // const className = `form-group ${touched && error ? 'has-danger' : ''}`
        const className = '';
        console.log('className ', className);
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                type={field.type}
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
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className={'form-inline'}>
                <Field
                    name="email"
                    label="Email"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    name="password"
                    label="Password"
                    type="password"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
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
