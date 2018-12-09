import Axios from 'axios';

export default {

    getNotes: () => {
        return new Promise((resolve, reject) => {
            Axios.get('/api/getnotes')
            .then((response) => {
                resolve(response)
            }).catch(() => {
                reject(error)
            });
        });
    },

    postNote: (title, description, pinned) => {
        return new Promise((resolve, reject) => {
            Axios.post('/api/insertnote', {
                title: title,
                description: description,
                pinned: pinned
            }).then(function (response){
                console.log(response);
            }).catch(function(error){
                console.log('postNote error -',error)
            });
        });
    },

    updateNote: (noteId) => {
        const config = {headers: {'Content-Type': 'application/json'}};
        return new Promise((resolve, reject) => {
            Axios.put('/api/updatenote', noteId, config).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        });
    },

    deleteNote: (noteId) => {
        return new Promise((resolve, reject) => {
            Axios.delete('/api/deletenote/' + noteId).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        });
    }

};