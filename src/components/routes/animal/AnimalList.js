import React, { Component } from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';

class AnimalList extends Component {
  handleUpdate(e) {
    this.props.update(e.target.id)
  }

  handleDelete(e) {
    this.props.delete(e.target.id)
  }

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
                      <td><Button id={animal.id} bsStyle="danger" onClick={(e) => this.handleDelete(e)}>Excluir</Button></td>
                    </tr>)
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