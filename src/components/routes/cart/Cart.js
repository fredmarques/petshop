import React, { Component } from 'react';
import CartList from './CartList';
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-flexbox-grid';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.products = this.props.products;
    this.total = this.props.total;
    this.onCheckoutClick = this.props.onCheckoutClick;
    this.onClearCartClick = this.props.onClearCartClick;
    this.checkout = this.checkout.bind(this);
    this.clear = this.clear.bind(this);
  }

  // componentDidMount() {
  //   if (!this.props.products) {
  //     const { id } = this.props.match.params;
  //     this.props.fetchPost(id);
  //   }
  // }
  checkout(){
    this.onCheckoutClick()
  }
  clear(){
    this.onClearCartClick();
  }
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col xs={12}>
            <h2>Seu carrinho de compras </h2>
          </Col>
          <Col xs={12}>
            <Button bsStyle="success" onClick={this.checkout}>Finalizar compra</Button>
            <Button bsStyle="danger" onClick={this.clear}>Limpar carrinho</Button>
          </Col>
        </Row>
        <Row>
            {this.products.map(product => <CartItem key={product.id} product={product} />)}
        </Row>
      </div>
    );
  }
}

export default Cart;