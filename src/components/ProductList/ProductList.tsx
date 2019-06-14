import * as React from 'react';
import './ProductList.scss';
import ProductListItem from './ProductListItem';

interface IProductListProps {}

export interface IProductListItem {
    title: string;
    text: string;
    id: number;
}

interface IProductListState {
    products: IProductListItem[];
}

// tslint:disable-next-line: prefer-const
let mockProductList: IProductListItem[] = [];

function generatorProductList(title: string, text: string, id: number) {
    mockProductList.push({
        title, 
        text, 
        id
    });
};
for (let i = 0; i < 4; i++) {
    generatorProductList("Anya"+i, "Fully-configurable"+i, i);
}

export default class ProductList extends React.Component<IProductListProps, IProductListState> {
    constructor(props: IProductListProps) {
        super(props);
        this.state = {products: mockProductList};
    }
    public renderProductList() {
        return this.state.products.map((item) => <ProductListItem productItem={item} key={item.id} />)
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