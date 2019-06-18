import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { IProductListItem } from './ProductList';
import './ProductListItem.scss';

interface IProductListItemProps {
    productItem: IProductListItem;
    key: number;
}

interface IProductListItemState {
}

export default class ProductListItem extends React.Component<IProductListItemProps, IProductListItemState> {
    public render() {
    const id = this.props.productItem.id;
    return (
        <Link to={"/product-description/"+id} className="product-list-item">
            {this.props.productItem.title}
            <p>
            {this.props.productItem.text}
            </p>
        </Link>
    );
 }
}