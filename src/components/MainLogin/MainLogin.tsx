import * as React from 'react';
import './MainLogin.scss';
interface IMainLoginProps {
    userList: IUserList;
    login: string;
    password: string;
};
export let isLogin: boolean = false;
interface IMainLoginState extends IUserList{

};

interface IUserList {
    login: string;
    password: string;
};

const mockUserList: IUserList = {
    login: "a",
    password: "1",
};

export default class MainLogin extends React.Component<IMainLoginProps, IMainLoginState> {
    constructor(props: IMainLoginProps) {
        super(props);
        this.state = {
            login: "", 
            password: ""
        };
        this.onChangeLogin=this.onChangeLogin.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onClickButtonLogin = this.onClickButtonLogin.bind(this);
    }

    public render() {
        return (
            <div className="login">
                <div className="login__form">
                    <label className="login__title">Логин
                        <input type="text" className="login__input" onChange={this.onChangeLogin} defaultValue={this.state.login}/>
                    </label>
                    <label className="login__title">Пароль
                        <input type="text" className="login__input" onChange={this.onChangePassword} defaultValue={this.state.password}/>
                    </label>
                    <button onClick={this.onClickButtonLogin}>Вход</button>
                </div>
            </div>
        );
    };
    public onClickButtonLogin() {
        this.verification();
    }
    public onChangeLogin(e: React.ChangeEvent<HTMLInputElement>):void {
        this.setState({login: e.target.value})
        console.dir(e.target.value);
    }
    public onChangePassword(e: React.ChangeEvent<HTMLInputElement>):void {
        this.setState({password: e.target.value})
        console.dir(e.target.value);
    }
    private verification() {
        const login = this.state.login;
        const password = this.state.password;
        if (login === mockUserList.login && password === mockUserList.password ) { 
            isLogin = true;
            alert('Hello');
        } else {
            isLogin = false;
            alert('Vali');
        }
        
    };
}