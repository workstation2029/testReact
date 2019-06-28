import * as React from 'react';
import 'src/components/RegistrationForm/RegistrationForm'
import { string } from 'prop-types';

interface IRegistrationFormProps {};

interface IRegistrationFormState {
    user: IUserRegistration;
};
interface IUserRegistration {
    id: string;
    login: string;
    secondName: string;
    password: string;
}

export default class RegistrationForm extends React.Component<IRegistrationFormProps, IRegistrationFormState> {
    constructor(props: IRegistrationFormProps) {
        super(props);
        this.state = {
            user: {
                id: '', 
                login: '',
                secondName: '',
                password: ''
            }
        };
    }
    public render() {
        return (
            <form className="registration-form">
                <input type="text" className="registration-form__item" value={this.state.user.login} onChange={this.onChangeFormItem}/>
                <input type="text" className="registration-form__item" value={this.state.user.secondName}/>
                <input type="password" className="registration-form__item" value={this.state.user.password}/>
            </form>
        );
    }

    public onChangeFormItem(e:React.ChangeEvent<HTMLInputElement>):void {
        // const Item = this.state.user[NameItem];
        const user = this.state.user;
        this.setState({user});
    }
}