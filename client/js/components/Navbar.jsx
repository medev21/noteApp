import React from 'react';

class Navbar extends React.Component {

    handleUpdateNote = () => {
        console.log('handle update note');
    }

    render(){

        return (
            <button type="button" onClick={this.handleUpdateNote}>Update</button>
        );
    }
}

export default Navbar;