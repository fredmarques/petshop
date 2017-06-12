import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import dog from '../../../assets/dog.jpg';
import Card from '../../shell/items/card';
import './Services.css';

const body = 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.';
const heading = 'Dog fofo';
class Services extends Component {
    render() {
        return (
            <Grid fluid>
                <Row> 
                    <Col xs={12}>
                        <Card width={64} height={64} image={dog} alt={'dog'} heading={heading} body={body}/>
                    </Col>
                </Row>
                <Row> 
                    <Col xs={12}>
                        <Card width={64} height={64} image={dog} alt={'dog'} heading={heading} body={body}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Services;