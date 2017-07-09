import React, { Component } from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';

class AnimalList extends Component {
  render() {
    console.log(this.props.animals)
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Raça</th>
                  <th>Idade</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.animals.map(animal =>  
                    <tr>
                      <td>{animal.id}</td>
                      <td>{animal.name}</td>
                      <td>{animal.breed}</td>
                      <td>{animal.age}</td>
                      <td><Button bsStyle="info">Editar</Button></td>
                      <td><Button bsStyle="danger">Excluir</Button></td>
                    </tr> )
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AnimalList;