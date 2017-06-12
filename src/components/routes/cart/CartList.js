import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';

class CartList extends Component {
  constructor(props) {
    super(props);
    // props
    this.xs = this.props.xs || 6;
    this.md = this.props.md || 4;
    this.lg = this.props.lg || 4;
    this.children = this.props.children;
  }
  render() {
    return (
      <div>
        {
          this.children.map(child => (
            <Row inline>
              {child}
            </Row>
          ))
        }
      </div>
    );
  }
}

// <Col xs={this.xs} md={this.md} lg={this.lg}>
//     {child}
// </Col>
export default CartList;