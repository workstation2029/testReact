import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import mockProductList from 'src/models/mockProductList';
import Search from '../Search/Search';
import './ProductList.scss';
import ProductListItem from './ProductListItem';

interface IProductListProps {
}

export interface IProductListItem {
    img: string;
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
    /**
     * Отображаемые продуцкты
     */
    public products: IProductListItem[];

    constructor(props: IProductListProps) {
        super(props);
        this.products = mockProductList;
        this.state = {products: this.products};
        this.searchElements = this.searchElements.bind(this);
        this.amountPage = Math.ceil(this.state.products.length / this.maxCountItem);
    }
    /**
     * Изменяет состояние продуктов (отображает продукты соответствующие строке поиска)
     */
    public searchElements(products: IProductListItem[]) {
        console.log(products);
        this.setState({products});
        console.log('Link');
    }
    public renderProductList(numberPage: number, products: IProductListItem[]) {
        if (!(numberPage > 0)) { return null; }
        const productsOnPage = [];
        /**
         * id первого элемента на странице
         */
        const firstItem = this.maxCountItem*(numberPage)-this.maxCountItem;
        /**
         * id последнего элемента на странице
         */
        const lastItem = this.maxCountItem*(numberPage);
        for (let i = firstItem; i < lastItem && i < products.length; i++) {
            const item = products[i];
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
         * количество страни по 12 элементов (нужно округлять в большую сторону так как появится дробные страницы)
         */
        const amountPage = Math.ceil(this.state.products.length / this.maxCountItem);
        /**
         * проверка что страницы с индексом 0 и меньше не существует
         */
        if (!(numberPage > 0)) { return null; }
        /**
         * отображение кнопок перехода если страниц меньше 9
         */
        if (amountPage <= 8) {
            for (let i = 1; i <= amountPage; i++) {
                button.push(
                            <Link to={"/product-list/"+ Number(i)} className="button-toggle-page" activeClassName="active">{i}</Link>
                        );
            }
            return button;
        }
        /**
         * отображение кнопок перехода для последних 8ми страниц
         */
        if (numberPage > (amountPage - this.maxAmountPage)) {
            button.push(
                <Link to={"/product-list/1"} className="button-toggle-page" activeClassName="active">{"<"}</Link>
            );
            for (let i = amountPage - this.maxAmountPage; i <= amountPage; i++) {
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
                <Link to={"/product-list/"+amountPage} className="button-toggle-page" activeClassName="active">{">"}</Link>
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
            for (let i = firstNumber; i < lastNumber && i <= amountPage; i++) {
                button.push(
                            <Link to={"/product-list/"+ Number(i)} className="button-toggle-page" activeClassName="active">{i}</Link>
                        );
            }
            button.push(
                <Link to={"/product-list/"+amountPage} className="button-toggle-page" activeClassName="active">{">"}</Link>
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
                {this.renderProductList(numberPage, this.state.products)}
                <div className="product-list__buttons">
                    {this.renderNumberPage(numberPage)}
                </div>
                <Search products={this.products} 
                        setters={this.searchElements}/>
            </main>
        );
    };
}