import React, { Component } from 'react';
import Cart from './Cart';
import { checkout, clearCart } from '../../../actions'
import { connect } from 'react-redux';
import { getTotal, getCartProducts } from '../../../reducers';

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.products = this.props.products;
    this.total = this.props.total;
  }

  componentDidMount() {
    console.log('tentando aqui:');
  }
  
  render() {
    return (
      <Cart
        products={this.products}
        total={this.total}
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

// class componentName extends Component {
//   constructor(props) {
//     super(props);

//   }

//   componentWillMount() {

//   }

//   componentDidMount() {

//   }

//   componentWillReceiveProps(nextProps) {

//   }

//   shouldComponentUpdate(nextProps, nextState) {

//   }

//   componentWillUpdate(nextProps, nextState) {

//   }

//   componentDidUpdate(prevProps, prevState) {

//   }

//   componentWillUnmount() {

//   }

//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// componentName.propTypes = {

// };

// export default componentName;