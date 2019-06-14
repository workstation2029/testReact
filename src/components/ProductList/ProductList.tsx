import * as React from 'react';
import './ProductList.scss';
import ProductListItem from './ProductListItem';

// interface IProductListState {}

export default class ProductList extends React.Component {
    public render() {
        return (
            <main className="product-list">
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
            </main>
        );
    };
}