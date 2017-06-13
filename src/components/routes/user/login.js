import './User.css';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAdmin, loginUser } from '../../../actions';
import { loginStatus, loginMode } from '../../../reducers/login';

class Login extends Component {
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
        if (values.email === 'admin' && values.password === 'admin') {
            this.props.loginAdmin();
        } else {
            this.props.loginUser();
        }
        values.email = '';
        values.password = '';
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

const mapStateToProps = (state) => {
    return {
        status: loginStatus(state),
        mode: loginMode(state)
    }
};

export default reduxForm({
    form: 'Login'
})(
    connect(mapStateToProps, { loginAdmin, loginUser })(Login)
);