import './User.css';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAdmin, loginUser } from '../../../actions';
import { loginStatus, loginMode } from '../../../reducers/login';

class Customer extends Component {
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
        if (values.email === 'foo@admin.com') {
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
            <div> area do cliente </div>
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
    connect(mapStateToProps, { loginAdmin, loginUser })(Customer)
);