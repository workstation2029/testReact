import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import "./MainHeader.scss"

export default class MainHeader extends React.Component {
    public render() {
        return (
            <header className="main-header">
                <div className="main-header__inner">
                    <nav>
                        <Link exact={true} to="/">Главная</Link>
                        <Link to="/login">Вход</Link>
                    </nav>
                </div>
            </header>
        );
    };
}