import Axios from 'axios';

export default {

    postLogin: (userLogin) => {
        return new Promise((resolve, reject) => {
            Axios.post('/api/users/login', userLogin)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    },

    getNotes: (config) => {
        return new Promise((resolve, reject) => {
            Axios.get('/api/notes/getnotes', config)
            .then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error)
            });
        });
    },

    postNote: (title, description, pinned) => {
        return new Promise((resolve, reject) => {
            Axios.post('/api/notes/insertnote', {
                title: title,
                description: description,
                pinned: pinned
            }).then(function (response){
                resolve(response);
            }).catch(function(error){
                reject(error);
            });
        });
    },

    updateNote: (noteId, updatedTitle, updatedDescription, updatedPinned) => {
        const config = {headers: {'Content-Type': 'application/json'}};
        const content = {
            title: updatedTitle,
            description: updatedDescription,
            pinned: updatedPinned
        };
        return new Promise((resolve, reject) => {
            Axios.put('/api/notes/updatenote/' + noteId, content, config).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    },

    deleteNote: (noteId, config) => {
        return new Promise((resolve, reject) => {
            Axios.delete('/api/notes/deletenote/' + noteId, config).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error)
            });
        });
    }

};