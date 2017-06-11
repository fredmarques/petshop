import React, { Component } from 'react';
import { Image, Button, FormGroup, Form, FormControl, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.image = this.props.image;
        this.alt = this.props.alt;
        this.heading = this.props.heading;
        this.body = this.props.body;
        this.width = this.props.width;
        this.buttons = this.props.buttons;
        this.state = {
            value: 0,
            name: this.props.name
        }
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
    render() {
        return (
            <div style={{marginTop: 50}}>
                <Row center="lg">
                    <Col center xs={3} md={3} lg={12}>
                        <Image width={this.width} height={this.height} src={this.image} alt={this.alt} rounded />
                    </Col>
                </Row>
                <Row center="lg">
                    <Col style={{padding: "0 60px"}} xs={3} md={3} lg={12}>
                        <h3>{this.heading}</h3>
                        <p style={{"text-align": "justify"}}>{this.body}</p>
                    </Col>
                </Row>
                <Row center="lg">
                    <Form inline>
                        <FormGroup>
                            <Button bsStyle="primary" bsSize="small" onClick={this.decreseValue}><Glyphicon glyph="minus" /></Button>
                            <FormControl style={{ width: "60px" }} type="text" value={this.state.value} disabled />
                            <Button bsStyle="primary" bsSize="small" onClick={this.incrementValue}><Glyphicon glyph="plus" /></Button>
                            <Button bsStyle="primary" bsSize="small" ><Glyphicon glyph="shopping-cart" /></Button>
                        </FormGroup>
                    </Form>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state', state);
    console.log('ownProps', ownProps);
    return {
        cart: { name: ownProps.name, quantity: state.value}
    }
};
export default connect(mapStateToProps)(ProductCard);
