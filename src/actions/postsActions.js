import defaultPostsArray from './../posts.json'



export const addPost = (postData) => dispatch => {
    dispatch({
        type: 'ADD_POST',
        payload: postData
    })
};

export const removePost = (postId) => dispatch => {
    dispatch({
        type: 'REMOVE_POST',
        payload: postId
    })
};

export const loadPosts = () => dispatch => {
    defaultPostsArray.map(function (post) {
        return dispatch({
            type: 'ADD_POST',
            payload: post
        })
    });

};