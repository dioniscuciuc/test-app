import defaultPostsArray from './../posts.json'



export const addPost = (postData) => dispatch => {
    let posts = JSON.parse(localStorage.getItem('simpalsPosts'));

    posts.push(postData);
    localStorage.setItem('simpalsPosts', JSON.stringify(posts));

    dispatch({
        type: 'ADD_POST',
        payload: postData
    })
};

export const removePost = (postId) => dispatch => {
    let posts = JSON.parse(localStorage.getItem('simpalsPosts'));

    posts =  posts.filter(element => element.id !== postId);
    localStorage.setItem('simpalsPosts', JSON.stringify(posts));

    dispatch({
        type: 'REMOVE_POST',
        payload: postId
    })
};

export const loadPosts = () => dispatch => {

    if( !localStorage.getItem('simpalsPosts') || !JSON.parse(localStorage.getItem('simpalsPosts')).length){
        localStorage.setItem('simpalsPosts', JSON.stringify(defaultPostsArray));
    }

    let posts = JSON.parse(localStorage.getItem('simpalsPosts'));

    posts.map(function (post) {
        return dispatch({
            type: 'ADD_POST',
            payload: post
        })
    });

};