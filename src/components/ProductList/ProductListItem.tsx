import * as React from 'react';
import IProductListItem from './ProductList';
import './ProductListItem.scss';

interface IProductListItemProps {
    productItem: IProductListItem;
    key: number;
}
interface IProductListItemState {
}

export default class ProductListItem extends React.Component<IProductListItemProps, IProductListItemState> {
    // constructor(props: IProductListItemProps) {
    //     super(props);
    // }
    public render() {
     return (
         <div className="product-list-item">
             {this.props.productItem}
         </div>
     );
 }
}