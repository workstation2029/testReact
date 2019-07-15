// import * as React from 'react';
// import 'src/pages/RegistrationForm/RegistrationForm.scss'

// interface IRegistrationFormProps {};

// interface IRegistrationFormState extends IUserRegistration{
//     // user: IUserRegistration;
// };
// interface IUserRegistration {
//     // id: string;
//     login: string;
//     secondName: string;
//     password: string;
// }

// export default class RegistrationForm extends React.Component<IRegistrationFormProps, IRegistrationFormState> {
//     private nameField: HTMLInputElement | null = null;
//     private secondNameField: HTMLInputElement | null = null;
//     private passwordField: HTMLInputElement | null = null;
//     constructor(props: IRegistrationFormProps) {
//         super(props);
//         this.state = {
//                 // id: '', 
//                 login: '',
//                 secondName: '',
//                 password: ''
//         };
//     }
//     public render() {
//         return (
//             <form className="registration-form" onSubmit={this.handleSubmit}>
//                 <input 
//                     type="text" 
//                     className="registration-form__item" 
//                     defaultValue="name" 
//                     onChange={this.onChangeName} 
//                     ref={nameField => this.nameField = nameField}/>
//                 <input 
//                     type="text" 
//                     className="registration-form__item"  
//                     defaultValue="secondName" 
//                     onChange={this.onChangeSecondName} 
//                     ref={SecondName => this.secondNameField = SecondName} />
//                 <input 
//                     type="password" 
//                     className="registration-form__item" 
//                     defaultValue="password" 
//                     onChange={this.onChangePassword} 
//                     ref={password => this.passwordField = password} />
//                 <input type="submit" value="Push"/>
//             </form>
//         );
//     }
//     public onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
//         // const login = this.nameField!.value;
//         this.setState({login: e.target.value});
//         console.log(this);
//         console.log(login);
//         // this.setState({name})
//     } 
//     public onChangeSecondName(e: React.ChangeEvent<HTMLInputElement>) {
//         // const secondName = this.secondNameField;
//         console.log(secondName: e.target.);
//         // this.setState({name})
//     } 
//     public onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
//         const password = this.passwordField;
//         console.log(password);
//         // this.setState({name})
//     }
//     public handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
//         alert(this.passwordField);
//     }
//     // public onChangeFormItem(e:React.ChangeEvent<HTMLInputElement>):void {
//     // }
// }