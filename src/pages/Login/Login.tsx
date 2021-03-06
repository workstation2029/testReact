import * as React from 'react';
import { Redirect } from 'react-router-dom';
import LoginContext from 'src/context/LoginContext';
import './Login.scss';


interface ILoginProps {
    userList: IUserList;
    login: string;
    password: string;
};

interface ILoginState extends IUserList{
};

interface IUserList {
    login: string;
    password: string;
    userID: number;
};

const mockUserList: IUserList = {
    login: "a",
    password: "1",
    userID: 1,
};

export default class Login extends React.Component<ILoginProps, ILoginState> {

    public static contextType = LoginContext;
    private loginInput: HTMLInputElement | null = null;
    private passwordInput: HTMLInputElement | null = null;
    // public isVerification = this.context.login;
    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            login: "", 
            password: "",
            userID: 1
        };
        this.onChangeLogin=this.onChangeLogin.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onClickButtonLogin = this.onClickButtonLogin.bind(this);
    }

    public render() {
        if (this.context.login) {
           return <Redirect exact={true} from="/login" to="/product-list/1" />;
        }
        return (
            <div className="login">
                <form className="login__form">
                    <label className="login__title">Логин
                        <input
                         type="text" 
                         className="login__input" 
                         onChange={this.onChangeLogin} 
                         defaultValue={this.state.login}
                         ref={login =>  this.loginInput = login}
                         />
                    </label>
                    <label className="login__title">Пароль
                        <input 
                        type="text" 
                        className="login__input" 
                        onChange={this.onChangePassword}
                        defaultValue={this.state.password}
                        ref={password => this.passwordInput =  password}
                        />
                    </label>
                    <button onClick={this.onClickButtonLogin}>Вход</button>
                </form>
            </div>
        );
    }
    public onClickButtonLogin(e: React.SyntheticEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.verification();
    }
    public onChangeLogin(e: React.ChangeEvent<HTMLInputElement>):void {
        this.setState({login: e.target.value})
        console.dir(e.target.value.toUpperCase());
    }
    public onChangePassword(e: React.ChangeEvent<HTMLInputElement>):void {
        this.setState({password: e.target.value})
        console.dir(e.target.value);
    }
    public verification() {
        const login = this.loginInput!.value;
        const password = this.passwordInput!.value;
        
        if (login === mockUserList.login && password === mockUserList.password ) { 
            this.context.login = true;
            localStorage.setItem('login ' + this.state.userID, this.state.login);
            localStorage.setItem('password' + this.state.userID, this.state.password);
            localStorage.setItem('login', 'true');
            document.location.reload();
        } else {
            this.context.login = false;
            localStorage.setItem('login', '');
            alert('Vali');
        }
        
    }}