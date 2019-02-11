import React from 'react';
import Redirect from 'react-router-dom';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
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