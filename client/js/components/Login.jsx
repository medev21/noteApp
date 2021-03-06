import React from 'react';
import {Redirect} from 'react-router-dom';
import Apis from '../utils/Apis';
import '../../css/Login.scss';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            email: 'test@test.com',
            password: '123',
            redirectBool: false
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    handleLoginSubmit = (event) => {
        const userLogin = {
            email: this.state.email,
            password: this.state.password
        }
        Apis.postLogin(userLogin)
        .then((res) => {
            if(res.data){
                sessionStorage.setItem('userData', JSON.stringify(res.data))
                this.setState({
                    // email: '',
                    // password: '',
                    redirectBool: true
                })
            }
        })
        .catch((err) => {
            console.log(err);
        });

        event.preventDefault();
    }

    render(){
        const isHome = this.state.redirectBool;
        if(isHome){
            return <Redirect to='/home'/>;
        }

        if(sessionStorage.getItem('userData')){
            return <Redirect to='/home'/>;
        }

        return(
            <div className="loginContainer">
                <div className="loginHeader">
                    <h3>NotaSimple</h3>
                </div>

                <div className="loginForm">
                    <form onSubmit={this.handleLoginSubmit}>
                        <div className="emailSection">
                            <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
                        </div>
                        <div className="passwordSection">
                            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                        </div>
                        <div className="submitSection">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Login;