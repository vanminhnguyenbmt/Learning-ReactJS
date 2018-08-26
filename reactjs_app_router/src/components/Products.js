import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        var products = [
            {
                id: 1,
                slug: 'iphone',
                name: 'Iphone X',
                price: 35000000
            },
            {
                id: 2,
                slug: 'samsung',
                name: 'Samsung Note8',
                price: 20000000
            },
            {
                id: 3,
                slug: 'oppo',
                name: 'Oppo F1s',
                price: 5000000
            }
        ];

        var { match } = this.props;
        var url = match.url;
        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item"> {product.id} - {product.name} - {product.price}</li>
                </NavLink>
            )
        });

        var { location } = this.props;
        console.log(location);
        
        return (
            <div className="container" >
                Danh sách sản phẩm

                <div className="row" >
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:name" component={Product} />
                </div>

            </div >
        );
    }
}

export default Products;
