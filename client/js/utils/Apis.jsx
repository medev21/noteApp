import Axios from 'axios';

export default {

    getNotes: () => {
        return new Promise((resolve, reject) => {
            Axios.get('/api/getnotes')
            .then((response) => {
                resolve(response)
            }).catch((error) => {
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
            Axios.put('/api/updatenote/' + noteId, content, config).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    },

    deleteNote: (noteId) => {
        return new Promise((resolve, reject) => {
            Axios.delete('/api/deletenote/' + noteId).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error)
            });
        });
    }

};