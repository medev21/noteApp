import Axios from 'axios';

export default {

    postNote: function(title, description, pinned) {
        return new Promise((resolve, reject) => {
            Axios.post('/api/insert', {
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

    getTest: function(){
        return 'hello apis.jsx';
    }
};