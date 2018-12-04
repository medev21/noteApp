//client/component/Add.jsx
import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            pinned: null,
        }
    }

    insertNewNote = (e) => {
        Axios.post('/insert', {
            title: '',
            description: '',
            pinned: false
        }).then(function (response){
            console.log(response);
        }).catch(function(error){
            console.log('Add.jsx-',error)
        });
    };

    render() {
        return(
            <h1>this is the add jsx file</h1>
        );
    }
}

export default Add;