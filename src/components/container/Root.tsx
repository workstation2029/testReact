import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import MainLogin from "../MainLogin/MainLogin";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductList from "../ProductList/ProductList";

export default class Root extends React.Component {
    public render() {
        return (
        <Router>
            <MainHeader />
            <Switch>
                <Route exact={true} path="/" component={ProductList} />
                <Route path="/login" component={MainLogin} />
                <Route path="/product-description/:id" component={ProductDescription} />
                <Route path="/product-list/:page" component={ProductList} />
            </Switch>
            <MainFooter />
        </Router>
        );
    }
}