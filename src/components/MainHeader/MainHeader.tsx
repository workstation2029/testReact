import * as React from 'react';
import "./MainHeader.scss"

export default class MainHeader extends React.Component {
    public render() {
        return (
            <header className="main-header">
                <div className="main-header__inner">
                    <nav>
                        <a href="/">Главная</a>
                        <a href="/login">Вход</a>
                    </nav>
                </div>
            </header>
        );
    };
}