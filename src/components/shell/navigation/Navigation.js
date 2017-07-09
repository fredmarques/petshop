import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import NavegationItem from './NavegationItem';
import { connect } from 'react-redux';
import { loginStatus, loginMode } from '../../../reducers/login';
import Logout from '../../routes/user/logout';


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

    addLogOutLink() {
      const { status } = this.props;
      if(status)
        return <Logout/>
    }

    render() {
      return (
        <Nav bsStyle="tabs">
          {this.renderItems(this.props.menuList)}
          {this.addLogOutLink()}
        </Nav>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      menuList: state.navegation,
      status: loginStatus(state),
    }
};

export default connect(mapStateToProps, null, null,{pure: false})(Navegation);

