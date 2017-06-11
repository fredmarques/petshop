import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductItem from './ProductItem';
import { addToCart } from '../../../actions'
import { connect } from 'react-redux';
import { getVisibleProducts } from '../../../reducers/products'

class ProductsContainer extends Component {
    render() {
        return (
            <ProductList xs={6} md={4} lg={4}>
                { this.props.products.map(product =>
                    <ProductItem key={product.id} product={product} onAddToCartClick={(quantity) => this.props.addToCart(product.id, quantity)}/>)
                }
            </ProductList>
        );
    }
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(mapStateToProps, { addToCart })(ProductsContainer);