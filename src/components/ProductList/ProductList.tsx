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

const mockProductList: IProductListItem[] = Array.from({ length: 192 }, (x, i) => ({
    title: "Anya"+i, 
    text: "Fully-configurable"+i, 
    id: i
}));

export default class ProductList extends React.Component<IProductListProps, IProductListState> {
    /**
     * кол-во элементов на странице 
     */
    public maxCountItem = 12;
    /**
     * Максимальное количество кнопок перехода на страницы
     */
    public maxAmountPage = 8;
    /**
     * колличество страниц
     */
    public amountPage: number;
    /**
     * колличество дапазанов (по maxAmountPage)
     */
    public amountRanges: number;

    constructor(props: IProductListProps) {
        super(props);
        this.state = {products: mockProductList};
        this.amountPage = this.state.products.length / this.maxCountItem;
        this.amountRanges = Math.ceil(this.amountPage / this.maxAmountPage);
    }
    public renderProductList(numberPage: number) {
        if (!(numberPage > 0)) { return null; }
        const productsOnPage = [];
        const firstItem = this.maxCountItem*(numberPage)-this.maxCountItem;
        const lastItem = this.maxCountItem*(numberPage);
        for (let i = firstItem; i < lastItem && i < this.state.products.length; i++) {
            const item = this.state.products[i];
            productsOnPage.push(
                <ProductListItem productItem={item} key={i}/>
            );
        }
        return productsOnPage;
    }
    public renderNumberPage(numberPage: number) {
        const button: JSX.Element[] = [];
        const firstNumber = numberPage - 4;
        const lastNumber = numberPage + 4;
        if (!(numberPage > 0)) { return null; }
        if (this.amountPage < 8) {
            for (let i = 0; i < this.amountPage; i++) {
                button.push(
                            <Link to={"/product-list/"+ Number(i+1)}>{i+1}</Link>
                        );
            }
            return button;
        }
        if (numberPage > (this.amountPage - this.maxAmountPage)) {
            for (let i = this.amountPage - this.maxAmountPage; i <= this.amountPage; i++) {
                button.push(
                            <Link to={"/product-list/"+ Number(i)}>{i}</Link>
                        );
            }
            return button;
        }
        if (numberPage < 6) {
            for (let i = 0; i < this.maxAmountPage; i++) {
                button.push(
                            <Link to={"/product-list/"+ Number(i+1)}>{i+1}</Link>
                        );
            }
            return button;
        }
        if (numberPage > 5) {
            for (let i = firstNumber; i < lastNumber && i <= this.amountPage; i++) {
                button.push(
                            <Link to={"/product-list/"+ Number(i)}>{i}</Link>
                        );
            }
            return button;
        }

        // let range: number = 0;
        // for (let i = 0; i < this.amountRanges; i++) {
        //     if (numberPage > (i * this.maxAmountPage) && numberPage <= ((i+1) * this.maxAmountPage)) {
        //       range = i+1;
        //     }
        // }
        // console.log(range);
        // for (let i = range * this.maxAmountPage - this.maxAmountPage; i < range * this.maxAmountPage && i < this.amountPage; i++) {
        //     button.push(
        //         <Link to={"/product-list/"+ Number(i+1)}>{i+1}</Link>
        //     );
        // }
        return button;
    }
    public render() {
        const url = location.href;
        const urlParts = url.split('/');
        const numberPage = +urlParts[urlParts.length - 1];
        return (
            <main className="product-list">
                {this.renderProductList(numberPage)}
                <div className="product-list__buttons">
                    {this.renderNumberPage(numberPage)}
                </div>
            </main>
        );
    };
}