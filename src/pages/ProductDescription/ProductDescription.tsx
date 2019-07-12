import Axios from 'axios';
import * as React from 'react';
// import mockProductList from 'src/models/mockProductList';
import { IProductListItem } from '../ProductList/ProductList';
import './ProductDescription.scss';

interface IProductDescriptionProps {
    productItem: IProductListItem;
};

interface IProductDescriptionState {
    productItem: IProductListItem;
};

export default class ProductDescription extends React.Component<IProductDescriptionProps, IProductDescriptionState> {
    public productList: IProductListItem[];    
    constructor(props:any) {
        super(props);
        this.state = {
            productItem: {
                id: 0,
                isFirstTerminalFor: "",
                isSecondTerminalFor: "",
                lat: 0,
                lon: 0,
                name: '',
            }
        };
    }
    public componentWillMount() {
        const url = location.href;
        const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 1];
        Axios.get("http://busstop-api.vistar.su/busstop/"+id)
        .then(response => {
            console.log(response);
            this.setState({productItem: response.data});
        })
        .catch(() => console.log('error'));
    }
    public render() {
        const url = location.href;
        const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 1];
        console.log(id);
        console.log(id.toString);
        const title = this.state.productItem.name;
        const text = this.state.productItem.lat + this.state.productItem.lon;
        const idBusStop = this.state.productItem.id;
        return (
            <div className="product-description">
                <div className="product-description__img-wrap">{" "}</div>
                <div className="product-description__info"> 
                    <h2 className="product-description__title">{title}</h2>
                    <p className="product-description__text">{text}</p>
                    <p className="product-description__text">{idBusStop}</p>
                </div>
            </div>
        );
    }
}