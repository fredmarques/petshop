import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import NavegationItem from './NavegationItem';
import { connect } from 'react-redux';

const initalList = [
          {
            path: '/home',
            label: 'Home'
          },
          {
            path: '/services',
            label: 'Serviços'
          },
          {
            path: '/products',
            label: 'Productos'
          },
          {
            path: '/contact',
            label: 'Contato'
          },
          {
            path: '/calendar',
            label: 'Calendário'
          },
          {
            path: '/user',
            label: 'Usuario'
          },
          {
            path: '/cart',
            label: 'Carrinho'
          },
          {
            path: '/pet',
            label: 'Meus pets'
          }
        ];
class TitleBar extends Component {
    constructor(props) {
        super(props);
        // this.state = { selectedKey: 1 };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({ selectedKey: eventKey });
    }

    renderItems(itemList) {
      return itemList.map(item => <NavegationItem 
                  key={item.label} 
                  path={item.path}
                  label={item.label} />)
    }

    render() {
      return (
        <Nav bsStyle="tabs">
          {this.renderItems(this.props.menuList)}
        </Nav>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      menuList: state.menuList || initalList 
    }
};

export default connect(mapStateToProps)(TitleBar);
