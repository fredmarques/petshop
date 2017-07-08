import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import NavegationItem from './NavegationItem';
import { connect } from 'react-redux';


class Navegation extends Component {
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
      menuList: state.navegation
    }
};

export default connect(mapStateToProps, null, null,{pure: false})(Navegation);

