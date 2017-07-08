import React, { Component } from 'react'
import ProductList from './ProductList'
import ProductItem from './ProductItem'
import { addToCart } from '../../../actions/products'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../../../reducers/products'
import ProductForm from './ProductForm'

class ProductsContainer extends Component {
  render() {
    const { loginMode, loginStatus } = this.props;
    if(loginStatus && loginMode === 'admin') {
      return (
        <ProductForm />
      )
    }

    return (
      <ProductList xs={6} md={4} lg={4}>
        {this.props.products.map(product =>
          <ProductItem key={product.id} product={product} onAddToCartClick={(quantity) => this.props.addToCart(product.id, quantity)} />)
        }
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  loginStatus: state.login.loginStatus,
  loginMode: state.login.loginMode
})

export default connect(mapStateToProps, { addToCart })(ProductsContainer)