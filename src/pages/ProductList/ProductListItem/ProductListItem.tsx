import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { IProductListItem } from '../ProductList';
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
    const name = this.props.productItem.name;
    const text = this.props.productItem.lat + " " + this.props.productItem.lon;
    const productImg = 'src/logo.svg';
    return (
        <Link to={"/product-description/"+id} className="product-list-item">
            <img src={productImg} alt="" className="product-list-item__img"/>
            <h2>{name}</h2>
            <p>{text}</p>
        </Link>
    );
 }
}