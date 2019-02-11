import React from 'react';
import {Redirect} from 'react-router-dom';
import Apis from '../utils/Apis';
import { RSA_NO_PADDING } from 'constants';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
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
                this.setState({redirectBool: true})
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
            <form onSubmit={this.handleLoginSubmit}>
                <div className="emailSection">
                    <input type="text"  name="email" placeholder="email" onChange={this.handleChange}/>
                </div>
                <div className="passwordSection">
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                </div>
                <div className="submitSection">
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }

}

export default Login;