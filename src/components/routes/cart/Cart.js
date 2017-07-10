import React, { Component } from 'react';
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-flexbox-grid';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products
    }
    // this.products = this.props.products;
    this.total = this.props.total;
    this.onCheckoutClick = this.props.onCheckoutClick;
    this.onClearCartClick = this.props.onClearCartClick;
    this.checkout = this.checkout.bind(this);
    this.clear = this.clear.bind(this);
  }

  checkout(){
    this.onCheckoutClick()
    this.setState({product: []})
  }
  clear(){
    this.onClearCartClick();
    this.setState({product: []})
  }
  render() {
    return (
      <div className="container-fluid">
        {(this.props.products.length > 0
          ? <Row>
              <Col xs={12}>
                <h2>Seu carrinho de compras </h2>
              </Col>
              <Col xs={12}>
                <br/>
                <input name="creditcardcart" id="creditcardcart" type="text" placeholder="Cartão de crédito"/>
                <br/><br/>
                <Button bsStyle="success" onClick={this.checkout}>Finalizar compra</Button>
                <Button bsStyle="danger" onClick={this.clear}>Limpar carrinho</Button>
              </Col>
            </Row>
          : <Row>
              <Col xs={12}>
                <h2>Seu carrinho está vazio </h2>
              </Col>
            </Row>
        )}
        <Row>
          {this.props.products.map(product => <CartItem key={product.id} product={product} />)}
        </Row>
      </div>
    );
  }
}

export default Cart;