import * as React from 'react';
import './ProductList.scss';
import ProductListItem from './ProductListItem';

interface IProductListProps {

}
interface IProductListState {
    products: IProductListItem[];
}

interface IProductListItem {
    title: string;
    text: string;
    id: number;
}
// tslint:disable-next-line: prefer-const
let mockProductList: IProductListItem[] = [];
function generatorProductList(title: string, text: string, i: number) {
    mockProductList.push({
        title, 
        text, 
        id: i
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
    public render() {
        console.log(this.state);
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