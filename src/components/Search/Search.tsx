import * as React from "react";
import { IProductListItem } from "../ProductList/ProductList";
import './Search.scss';

interface ISearchProps {
    // onClickSearch: (evant:React.SyntheticEvent<HTMLButtonElement>) => void;
    products: IProductListItem[];
    setters: (a: IProductListItem[]) => void;
}

interface ISearchState {
    searchValue: string;
}
export default class Search extends React.Component<ISearchProps, ISearchState> {
    constructor(props: ISearchProps) {
        super(props);
        this.state = {searchValue: ""};
        this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
        this.onClickSearch = this.onClickSearch.bind(this);
    }
    public onChangeSearchValue(e:React.ChangeEvent<HTMLInputElement>) {
        const searchValue = e.target.value;
        console.dir(searchValue);
        this.setState({searchValue: e.target.value});
    }
    public onClickSearch(e: React.SyntheticEvent<HTMLButtonElement>) {
        e.preventDefault();
        const searchValue = this.state.searchValue;
        console.dir(searchValue);
// tslint:disable-next-line: no-bitwise
        const products =this.props.products.filter((item)=>(~item.title.indexOf(searchValue)));
        this.props.setters(products);
    }

    public render() {
        return (
            <form className="main-search">
                <input type="text" 
                        onChange={this.onChangeSearchValue}
                        defaultValue={this.state.searchValue}/>
                <button onClick={this.onClickSearch}>Search</button>
            </form>
        );
    }
}