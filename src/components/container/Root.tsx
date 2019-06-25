import * as React from "react";
import { BrowserRouter as Router , Redirect, Route, Switch } from "react-router-dom";
import LoginContext from 'src/context/LoginContext';
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import MainLogin from "../MainLogin/MainLogin";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductList from "../ProductList/ProductList";

export default class Root extends React.Component {
    public static contextType = LoginContext;
    public render() {
        const isLogin = Boolean(localStorage.getItem('login')) || false;
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
            <LoginContext.Provider value={{login: isLogin}}>
                <MainHeader />
                <Switch>
                    {mainPage}
                    <Route exact={true} path="/" component={MainLogin} />
                    <Route exact={true} path="/login" component={MainLogin} />
                    <Route exact={true} path="/product-description/:id" component={ProductDescription} />
                    <Route exact={true} path="/product-list/:page" component={ProductList} />
                </Switch>
                <MainFooter />
            </LoginContext.Provider>
        </Router>
        );
    }
}