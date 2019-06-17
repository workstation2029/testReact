import * as React from 'react';
import './ProductList.scss';
import ProductListItem from './ProductListItem';

interface IProductListProps {
}

export interface IProductListItem {
    title: string;
    text: string;
    id: number;
}

interface IProductListState {
    products: IProductListItem[];
}

const mockProductList: IProductListItem[] = Array.from({ length: 16 }, (x, i) => ({
    title: "Anya"+i, 
    text: "Fully-configurable"+i, 
    id: i
}));

export default class ProductList extends React.Component<IProductListProps, IProductListState> {
    constructor(props: IProductListProps) {
        super(props);
        this.state = {products: mockProductList};
    }
    public renderProductList() {
        return this.state.products.map((item) => <ProductListItem productItem={item} key={item.id}/>)
    }
    public render() {
        console.log(this.state);
        return (
            <main className="product-list">
                {this.renderProductList()}
            </main>
        );
    };
}