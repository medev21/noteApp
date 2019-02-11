import React from 'react';
import '../../css/Navbar.scss';
import {Redirect} from 'react-router-dom';

class Navbar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            redirectBool: false
        }
    }

    handleLogout = () => {
        console.log('login out....');
        sessionStorage.getItem('userData','');
        sessionStorage.clear();
        this.setState({redirectBool: true});
    };

    render(){

        const isLogout = this.state.redirectBool;
        if(isLogout){
            return <Redirect to="/"/>
        }

        return (
            <div className="navbar">
                <div className="rightSection">
                    <div className="logoutButton" onClick={this.handleLogout}>logout</div>
                    <div className="userInitials">MB</div>
                </div>

            </div>
            
        );
    }
}

export default Navbar;