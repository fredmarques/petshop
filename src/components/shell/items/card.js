import { Image, Media } from 'react-bootstrap';
import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.image = this.props.image;
        this.alt = this.props.alt;
        this.heading = this.props.heading;
        this.body = this.props.body;
        this.width = this.props.width;
        this.buttons = this.props.buttons;

    }
    render() {
        return (
            <div>
                <Media>
                    <Media.Left aling="top">
                        <Image width={this.width} height={this.height} src={this.image} alt={this.alt} rounded />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{this.heading}</Media.Heading>
                        <p>{this.body}</p>
                    </Media.Body>
                </Media>
            </div>
        );
    }
}

export default Card;
