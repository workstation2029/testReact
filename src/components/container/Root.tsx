import * as React from "react";
import { BrowserRouter as Router , Redirect, Route, Switch } from "react-router-dom";
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
                <Redirect exact={true} from="/" to="/product-list/1"  />
                <Route exact={true} path="/" component={ProductList} />
                <Route exact={true} path="/login" component={MainLogin} />
                <Route exact={true} path="/product-description/:id" component={ProductDescription} />
                <Route exact={true} path="/product-list/:page" component={ProductList} />
            </Switch>
            <MainFooter />
        </Router>
        );
    }
}