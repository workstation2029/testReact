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
    const id = this.props.productItem? this.props.productItem.id : 1;
    const title = this.props.productItem? this.props.productItem.title : 1;
    const text = this.props.productItem? this.props.productItem.text : 1;
    return (
        <Link to={"/product-description/"+id} className="product-list-item">
            {title}
            <p>
            {text}
            </p>
        </Link>
    );
 }
}