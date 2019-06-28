import * as React from 'react';
import 'src/components/RegistrationForm/RegistrationForm'

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
public render() {
    return (
        <form className="registration-form">
            <input type="text" className="registration-form__item" value={this.state.user.login}/>
            <input type="text" className="registration-form__item" value={this.state.user.secondName}/>
            <input type="password" className="registration-form__item" value={this.state.user.password}/>
        </form>
    );
}
}