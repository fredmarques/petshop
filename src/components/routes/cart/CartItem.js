import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Col } from 'react-flexbox-grid';

// <Col xs={6} md={4} lg={4}>
//     <ProductItem name="dog1" width={256} height={256} image={dog} alt={'dog'} heading={heading} body={body}/>
// </Col>

class CartItem extends Component {
    constructor(props) {
        super(props);
        // props
        this.id = this.props.product.id;
        this.image = this.props.product.image
        this.alt = this.props.product.alt || 'img';
        this.width = this.props.product.width || 256;
        this.quantity = this.props.product.quantity;
        this.height = this.props.product.height || 256;
        this.heading = this.props.product.heading;
        this.body = this.props.product.body;
        // component state
        this.state = {
            value: 0,
            name: this.props.name
        }
    }
    checkOut(quantity){
        this.onAddToCartClick(quantity);
        this.setState({
            value: 0
        });
    }
    clearCart(){

    }
    render() {
        return (
            <div style={{marginTop: 20}} >
              <Col xs={12} sm={4} style={{textAlign: "center"}}>
                <Image width={this.width} height={this.height} src={this.image} alt={this.alt} rounded />
              </Col>
              <Col xs={12} sm={6} style={{textAlign: "left", backgroundColor: "white"}}>
                <h4>{`${this.heading} (${this.quantity}un)`}</h4>
                <p>{this.body}</p>
              </Col>
              <Col sm={2}>
              </Col>
            </div>
        );
    }
}

export default (CartItem);
