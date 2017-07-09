import React, { Component } from 'react'
import ProductList from './ProductList'
import ProductItem from './ProductItem'
import { addToCart, getAllProducts } from '../../../actions/products'
import { connect } from 'react-redux'
// import { getVisibleProducts } from '../../../reducers/products'
import ProductForm from './ProductForm'

class ProductsContainer extends Component {
  render() {
    const { loginMode, loginStatus, products } = this.props;
    if(loginStatus && loginMode === 'admin') {
      return (
        <ProductForm />
      )
    } else if(!products || !products.length) {
      return (<p> Carregando... </p>)
    }
    return (
      <ProductList xs={6} md={4} lg={4}>
        {
          products.map(product => {
            return (<ProductItem key={product.id} product={product} onAddToCartClick={(quantity) => this.props.addToCart(product.id, quantity)} />)
          })
        }
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.productList,
  loginStatus: state.login.loginStatus,
  loginMode: state.login.loginMode
})

export default connect(mapStateToProps, { addToCart, getAllProducts })(ProductsContainer)