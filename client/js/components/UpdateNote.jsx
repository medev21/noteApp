import React from 'react';

class UpdateNote extends React.Component {

    handleUpdateNote = () => {
        console.log('handle update note');
    }

    render(){

        return (
            <button type="button" onClick={this.handleUpdateNote}>Update</button>
        );
    }
}

export default UpdateNote;