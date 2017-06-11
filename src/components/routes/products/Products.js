import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import dog from '../../../assets/dog.jpg';
import ProductCard from '../../shell/items/product-card';

const body = 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.';
const heading = 'Dog fofo';

class Products extends Component {
    render() {
        return (
            <Grid fluid>
                <Row> 
                    <Col xs={6} md={4} lg={4}>
                        <ProductCard name="dog1" width={256} height={256} image={dog} alt={'dog'} heading={heading} body={body}/>
                    </Col>

               </Row>
            </Grid>
        );
    }
}

export default Products;