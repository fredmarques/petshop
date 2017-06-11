import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class TitleBar extends Component {
    constructor(props) {
        super(props);
        // this.state = { selectedKey: 1 };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({selectedKey: eventKey});
    }

    render() {
        return (
                <Nav bsStyle="tabs">
                    <LinkContainer to={"/home"}>
                        <NavItem> Home </NavItem>
                    </LinkContainer>

                    <LinkContainer to={"/services"} >
                        <NavItem >Serviços</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/products">
                        <NavItem >Produtos</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/contacts">
                        <NavItem >Contato</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/calendar">
                        <NavItem >Calendário</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/about">
                        <NavItem >Sobre</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/login">
                        <NavItem >Login</NavItem>
                    </LinkContainer>
                </Nav>
        );
    }
}
