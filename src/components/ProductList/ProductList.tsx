import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
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

const mockProductList: IProductListItem[] = Array.from({ length: 12 }, (x, i) => ({
    title: "Anya"+i, 
    text: "Fully-configurable"+i, 
    id: i
}));

export default class ProductList extends React.Component<IProductListProps, IProductListState> {
    public countItem = 8;
    public countPage = 8;
    constructor(props: IProductListProps) {
        super(props);
        this.state = {products: mockProductList};
    }
    public renderProductList() {
        const productsOnPage = [];
        for (let i = this.countItem - 8; i < this.countItem; i++) {
            const item = this.state.products[i];
            productsOnPage.push(
                <ProductListItem productItem={item} key={item.id}/>
            );
        }
        return productsOnPage;
        // return this.state.products.map((item) => <ProductListItem productItem={item} key={item.id}/>)
    }
    public renderNumberProductPage(numberPage: string) {
        const button = [];
        numberPage = numberPage as unknown as number;
        for (let i = numberPage; i < this.countPage*numberPage; i++) {
            button.push(
                <Link to={"/product-list/"+i}>{i}</Link>
            );
        }
        return button;
    }
    public render() {
        const url = location.href;
        const urlParts = url.split('/');
        const numberPage = urlParts[urlParts.length - 1];
        return (
            <main className="product-list">
                {this.renderProductList()}
                <div className="product-list__buttons">
                    {this.renderNumberProductPage(numberPage)}
                </div>
            </main>
        );
    };
}