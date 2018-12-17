import React from 'react';

class Navbar extends React.Component {

    render(){

        return (
            <div className="navbar">
                <div className="logoutButton">logout</div>
                <div className="userInitials">MB</div>
            </div>
            
        );
    }
}

export default Navbar;