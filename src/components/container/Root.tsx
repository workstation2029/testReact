import * as React from "react";
import { BrowserRouter as Router , Redirect, Route, Switch } from "react-router-dom";
// import { NavLink as Link } from "react-router-dom";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import MainLogin from "../MainLogin/MainLogin";
import { isLogin } from "../MainLogin/MainLogin"
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductList from "../ProductList/ProductList";


export default class Root extends React.Component {
    public render() {
        let mainPage: JSX.Element;
        if (isLogin) {
            mainPage = <Redirect exact={true} from="/" to="/product-list/1" />
            console.dir(isLogin);
        } else {
            mainPage = <Redirect exact={true} from="/" to="/login" />
            console.dir(isLogin);
        } 
        return (
        <Router>
            <MainHeader />
            <Switch>
                {mainPage}
                <Route exact={true} path="/" component={MainLogin} />
                <Route exact={true} path="/login" component={MainLogin} />
                <Route exact={true} path="/product-description/:id" component={ProductDescription} />
                <Route exact={true} path="/product-list/:page" component={ProductList} />
            </Switch>
            <MainFooter />
        </Router>
        );
    }
}