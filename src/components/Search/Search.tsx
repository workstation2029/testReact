import * as React from "react";
import { IProductListItem } from "../ProductList/ProductList";

interface ISearchProps {
    handleClickSearch: (a:IProductListItem[]) => IProductListItem[];
}

interface ISearchState {
    searchValue: string;
}
export default class Search extends React.Component<ISearchProps, ISearchState> {
    public handleChangeSearchValue() {
        const searchValue = this.state.searchValue;
        this.setState({searchValue});
    }

    public render() {
        return (
            <input  type="text" 
                    onChange={this.handleChangeSearchValue}
                    onClick={this.handleClickSearch}
                    defaultValue={this.state.searchValue}/>
        );
    }
}