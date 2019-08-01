import * as React from "react";
import { BrowserRouter as Router , Redirect, Route, Switch } from "react-router-dom";
import LoginContext from 'src/context/LoginContext';
import { IMainPageProps } from "src/pages/MainPage/MainPage"
import MainPage from "src/pages/MainPage/MainPage";
import ProductDescription from "src/pages/ProductDescription/ProductDescription";
import ProductList from "src/pages/ProductList/ProductList";
// import RegistrationForm from "src/pages/RegistrationForm/RegistrationForm";
import MainFooter from "../components/MainFooter/MainFooter";
import MainHeader from "../components/MainHeader/MainHeader";
import mainPageData from "../models/mainPageData"
import MainLogin from "../pages/Login/Login";

export default class Root extends React.Component {
    public static contextType = LoginContext;
    public wrapperMainPage(data: IMainPageProps) {
        const advantagesItem = data.advantagesItem;
        const informationItem = data.informationItem;
        return (<MainPage advantagesItem={advantagesItem} informationItem={informationItem} />);
    }
    public render() {
        const isLogin = Boolean(localStorage.getItem('login')) || false;
        const mainPage: JSX.Element[] = [];
        const wrapperMainPage = this.wrapperMainPage.bind(this, mainPageData);
        if (isLogin) {
            mainPage.push(<Redirect exact={true} from="/login" to="/" />);
            mainPage.push(<Redirect exact={true} from="/" to="/product-list/1" />);
            mainPage.push(<Route exact={true} path="/product-description/:id" component={ProductDescription} />);
            mainPage.push(<Route exact={true} path="/product-list/:page" component={ProductList} />);
            console.log(mainPage);
        } else {
            mainPage.push(<Redirect exact={true} from="/" to="/login" />);
            mainPage.push(<Redirect exact={true} from="/product-list/:id" to="/" />);
            mainPage.push(<Route exact={true} path="/login" component={MainLogin} />);
            console.log(mainPage);
        } 
        
        return (
        <Router>
            <LoginContext.Provider value={{login: isLogin}}>
                <MainHeader />
                <Switch>
                    {mainPage.map((item)=>item)}
                    <Route exact={true} path="/main" component={wrapperMainPage} />
                    {/* <Route exact={true} path="/registration-form" component={RegistrationForm} /> */}
                    <Route exact={true} children={<h2 className="error">Ошибка 404</h2>} />
                </Switch>
                <MainFooter />
            </LoginContext.Provider>
        </Router>
        );
    }
}