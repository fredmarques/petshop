import React, { Component } from 'react';
import { Image, Media } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import dog from '../../../assets/dog.jpg';
import cat from '../../../assets/cat.jpeg';
import tiger from '../../../assets/tiger.jpeg';
import Card from '../../shell/items/card';
import './Home.css';

const body = 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.';
const heading = 'Dog fofo';

class Home extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <h1 className="welcome-title">Bem vindo ao Petcare</h1>
                        <h3 className="welcome-subtitle">Aqui é o lar do seu bichinho de estimação</h3>
                    </Col> 
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <Image className="animalImage" width={200} height={150} src={dog} alt={'dog'} rounded />
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <Image className="animalImage" width={200} height={150} src={cat} alt={'cat'} rounded />
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <Image className="animalImage" width={200} height={150} src={tiger} alt={'tiger'} rounded />
                    </Col>
               </Row>
            </Grid>
        );
    }
}

export default Home;