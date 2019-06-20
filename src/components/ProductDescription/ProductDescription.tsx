import * as React from 'react';
import mockProductList from 'src/models/mockProductList';
import { IProductListItem } from '../ProductList/ProductList';
import './ProductDescription.scss';

interface IProductDescriptionProps {
};

interface IProductDescriptionState {
    productList: IProductListItem[];
};

export default class ProductDescription extends React.Component<IProductDescriptionProps, IProductDescriptionState> {
    constructor(props:any) {
        super(props) 
        this.state = {
            productList: mockProductList
        };
    }
    public render() {
        const url = location.href;
        const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 1];
        console.log(id);
        console.log(id.toString);
        const title = this.state.productList[id].title;
        const text = this.state.productList[id].text;
        return (
            <div className="product-description">
                <div className="product-description__img-wrap">{" "}</div>
                <div className="product-description__info"> 
                    <h2 className="product-description__title">{title}</h2>
                    <p className="product-description__text">{text}</p>
                </div>
            </div>
        );
    }
}