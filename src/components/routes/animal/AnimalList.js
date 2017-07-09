import React, { Component } from 'react';

class AnimalList extends Component {
  render() {
    console.log(this.props.animals)
    return (
      <div>
        <h3> Lista de animais cadastrados </h3>
        <p> Lista de animais ainda não disponível </p>
      </div>
    );
  }
}

export default AnimalList;