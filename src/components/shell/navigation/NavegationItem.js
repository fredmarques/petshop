import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavegationItem extends Component {
    render() {
        return (
            <LinkContainer to={this.props.path}>
            <NavItem>{this.props.label }</NavItem>
            </LinkContainer>
        );
    }
}

export default NavegationItem;