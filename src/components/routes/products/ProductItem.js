import React, { Component } from 'react';
import { Image, Button, FormGroup, Form, FormControl, Glyphicon } from 'react-bootstrap';
import { Row } from 'react-flexbox-grid';

// <Col xs={6} md={4} lg={4}>
//     <ProductItem name="dog1" width={256} height={256} image={dog} alt={'dog'} heading={heading} body={body}/>
// </Col>

class ProductItem extends Component {
  constructor(props) {
    super(props);
    // props
    this.id = this.props.product.id;
    this.image = this.props.product.image;
    this.inventory = this.props.product.inventory;
    this.alt = this.props.product.alt;
    this.width = this.props.product.width || 256;
    this.height = this.props.product.height ||  256;
    this.heading = this.props.product.heading;
    this.body = this.props.product.body;
    this.onAddToCartClick = this.props.onAddToCartClick;
    // component state
    this.state = {
      value: 0,
      name: this.props.name
    }
    // bindings
    this.incrementValue = this.incrementValue.bind(this);
    this.decreseValue = this.decreseValue.bind(this);
  }
  incrementValue() {
    const currrentValue = this.state.value;
    const nextValue = currrentValue + 1;
    this.setState({
      value: nextValue
    })
  }
  decreseValue() {
    const currrentValue = this.state.value;
    const nextValue = currrentValue > 0 ? currrentValue - 1 : 0;
    this.setState({
      value: nextValue
    })
  }
  addToCart(quantity) {
    if (quantity > 0) {
      this.onAddToCartClick(quantity);
      this.setState({
        value: 0
      });
    }
  }
  render() {
    return (
      <div style={{ marginTop: 50, marginBottom: 50, padding: "0 10px" }}>
        <Row center="lg" style={{ justifyContent: "center", alignItems: "center" }}>
          <Image width={this.width} height={this.height} src={this.image} alt={this.alt} rounded />
        </Row>
        <Row center="lg">
          <h3>{this.heading}</h3>
          <p style={{ "textAlign": "justify", padding: "5px" }}>{this.body}</p>
        </Row>
        <Row center="lg" style={{ justifyContent: "center", alignItems: "center" }}>
          <Form inline>
            <FormGroup>
              <Button bsStyle="primary" bsSize="small" onClick={this.decreseValue}><Glyphicon glyph="minus" /></Button>
              <FormControl style={{ width: "60px" }} type="text" value={this.state.value} disabled />
              <Button bsStyle="primary" bsSize="small" onClick={this.incrementValue}><Glyphicon glyph="plus" /></Button>
              <Button bsStyle="primary" bsSize="small" onClick={() => this.addToCart(this.state.value)}><Glyphicon glyph="shopping-cart" /></Button>
            </FormGroup>
          </Form>
        </Row>
      </div>
    )
  }
}

export default (ProductItem);
