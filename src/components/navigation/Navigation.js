import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class TitleBar extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedKey: 1 };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({selectedKey: eventKey});
    }

    render() {
        return (
            <Nav bsStyle="tabs" activeKey={this.state.selectedKey} onSelect={this.handleSelect}>
                <NavItem eventKey="Home" title="Home">Home</NavItem>
                <NavItem eventKey="Services" title="Serviços">Serviços</NavItem>
                <NavItem eventKey="Products" title="Bruno">Produtos</NavItem>
                <NavItem eventKey="Contact" title="Contato">Contato</NavItem>
                <NavItem eventKey="Calendar" title="Calendário">Calendário</NavItem>
                <NavItem eventKey="About" title="Sobre">Sobre</NavItem>
                <NavDropdown eventKey="5.0" title="Serviços" id="nav-dropdown">
                    <MenuItem eventKey="5.1">Consulta</MenuItem>
                    <MenuItem eventKey="5.2"></MenuItem>
                    <MenuItem eventKey="5.3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="5.4">Separated link</MenuItem>
                </NavDropdown>
                <NavItem eventKey="Login" title="Login">Login</NavItem>
            </Nav>
        );
    }
}
