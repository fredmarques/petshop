import './Product.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class ProductForm extends Component {
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
      <div className="container">
        <div className={'contactForm'}>
          <h3>Cadastre um Novo Produto</h3>
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
              name="price"
              label="Preço"
              placeholder="Preço"
              type="text"
              component={this.renderField}
            />
            <Field
              name="stock"
              label="Qtd em estoque"
              placeholder="Qtd em estoque"
              type="text"
              component={this.renderField}
            />
            <Field
              name="sold"
              label="Qtd vendido"
              placeholder="Qtd vendido"
              type="text"
              component={this.renderField}
            />
            <Field
              name="desc"
              label="Descrição"
              type="input"
              component={
                ({ input }) => (
                  <textarea {...input} className="form-control message" rows="7" id="desc" placeholder="" />)}
            />
            <br />
            <button type="submit" className="btn btn-primary">Entrar</button>
            <Link to="/user" className="btn btn-danger">Cancelar</Link>
          </form>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

export default reduxForm({
  form: 'Product'
})(
  connect(mapStateToProps, {})(ProductForm)
);