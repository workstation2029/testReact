import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import mockProductList from 'src/models/mockProductList';
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
        /**
         * количество кнопок перехода слева от активной
         */
        const firstNumber = numberPage - 4;
        /**
         * количество кнопок перехода справа от активной
         */
        const lastNumber = numberPage + 4;
        /**
         * проверка что страницы с индексом 0 и меньше не существует
         */
        if (!(numberPage > 0)) { return null; }
        /**
         * отображение кнопок перехода если страниц меньше 9
         */
        if (this.amountPage <= 8) {
            for (let i = 1; i <= this.amountPage; i++) {
                button.push(
                            <Link to={"/product-list/"+ Number(i)} className="button-toggle-page" activeClassName="active">{i}</Link>
                        );
            }
            return button;
        }
        /**
         * отображение кнопок перехода для последних 8ми страниц
         */
        if (numberPage > (this.amountPage - this.maxAmountPage)) {
            button.push(
                <Link to={"/product-list/1"} className="button-toggle-page" activeClassName="active">{"<"}</Link>
            );
            for (let i = this.amountPage - this.maxAmountPage; i <= this.amountPage; i++) {
                button.push(
                            <Link to={"/product-list/"+ Number(i)} className="button-toggle-page" activeClassName="active">{i}</Link>
                        );
            }
            return button;
        }
        /**
         * отображение кнопок перехода для первых 6 стр. при этом диапазоне не происходит перемещение кнопок в центер
         */
        if (numberPage < 6) {
            for (let i = 1; i <= this.maxAmountPage; i++) {
                button.push(
                            <Link to={"/product-list/"+ Number(i)} className="button-toggle-page" activeClassName="active">{i}</Link>
                        );
            }
            button.push(
                <Link to={"/product-list/"+this.amountPage} className="button-toggle-page" activeClassName="active">{">"}</Link>
            );
            return button;
        }
        /**
         * отображение кнопок перехода после 6 стр. при этом диавазоне происходит перемещение кнопок в условный центер
         */
        if (numberPage > 5) {
            button.push(
                <Link to={"/product-list/1"} className="button-toggle-page" activeClassName="active">{"<"}</Link>
            );
            for (let i = firstNumber; i < lastNumber && i <= this.amountPage; i++) {
                button.push(
                            <Link to={"/product-list/"+ Number(i)} className="button-toggle-page" activeClassName="active">{i}</Link>
                        );
            }
            button.push(
                <Link to={"/product-list/"+this.amountPage} className="button-toggle-page" activeClassName="active">{">"}</Link>
            );
            return button;
        }

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