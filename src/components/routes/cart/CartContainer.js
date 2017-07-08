import React, { Component } from 'react';
import Cart from './Cart';
import { checkout, clearCart } from '../../../actions/products'
import { connect } from 'react-redux';
import { getTotal, getCartProducts } from '../../../reducers';

class CartContainer extends Component {
  render() {
    return (
      <Cart
        products={this.props.products}
        total={this.props.total}
        onCheckoutClick={() => this.props.checkout(this.products)} 
        onClearCartClick={() => this.props.clearCart()} />
    );
  }
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(mapStateToProps, { checkout, clearCart })(CartContainer);
