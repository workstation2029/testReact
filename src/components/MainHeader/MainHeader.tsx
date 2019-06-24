import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { isLogin } from '../MainLogin/MainLogin'
import "./MainHeader.scss"

export default class MainHeader extends React.Component {
    public onClickButtonExit(e: React.SyntheticEvent<HTMLButtonElement>) {
        e.preventDefault();
        localStorage.clear();
    }
    
    public render() {
        this.onClickButtonExit = this.onClickButtonExit.bind(this);
        let headerNavigation: JSX.Element;
        if (isLogin) {
            headerNavigation = (
                <nav>
                    <Link exact={true} to="/">Главная</Link>
                    <button onClick={this.onClickButtonExit}>Выход</button>
                </nav>
        );
    } else {
            headerNavigation = (
                <nav>
                    <Link exact={true} to="/">Главная</Link>
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