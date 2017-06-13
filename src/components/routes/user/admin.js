import './User.css';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { loginAdmin, loginUser } from '../../../actions';
import { loginStatus, loginMode } from '../../../reducers/login';

class Admin extends Component {
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
        return (
            <div>Area do admin</div>
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
    form: 'Admin'
})(
    connect(mapStateToProps)(Admin)
    );