import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import LoginContext from '../../context/LoginContext';
import "./MainHeader.scss"

export default class MainHeader extends React.Component {
    public static contextType = LoginContext;
    public onClickButtonExit(e: React.SyntheticEvent<HTMLButtonElement>) {
        e.preventDefault();
        localStorage.clear();
        document.location.reload();
        this.context.login = false;
    }
    
    public render() {
        const isLogin = this.context.login;
        this.onClickButtonExit = this.onClickButtonExit.bind(this);
        let headerNavigation: JSX.Element;

        if (isLogin) {
            headerNavigation = (
                <nav>
                    <Link exact={true} to="/">Главная</Link>
                    <Link exact={true} to="/main">Информация</Link>
                    <button onClick={this.onClickButtonExit}>Выход</button>
                </nav>
        );
        } else {
            headerNavigation = (
                <nav>
                    <Link exact={true} to="/">Главная</Link>
                    <Link exact={true} to="/registration-form">Регистрация</Link>
                    <Link to="/login">Вход</Link>
                </nav>
            );
        }
        
        return (
            <header className="main-header">
                <div className="main-header__inner">
                    {headerNavigation}
                </div>
            </header>
        );
    };
}