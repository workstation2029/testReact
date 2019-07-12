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
                <input 
                    type="text" 
                    className="registration-form__item" 
                    defaultValue="Name" 
                    onChange={this.onChangeName} ref="nameField"/>
                <input 
                    type="text" 
                    className="registration-form__item"  
                    defaultValue="SecondName" 
                    onChange={this.onChangeSecondName} />
                <input 
                    type="password" 
                    className="registration-form__item" 
                    defaultValue="" 
                    onChange={this.onChangePassword} />
            </form>
        );
    }

    // public onChangeFormItem(e:React.ChangeEvent<HTMLInputElement>):void {
    // }
}