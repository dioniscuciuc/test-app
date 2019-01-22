export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat(action.payload);
        case 'REMOVE_POST':
            return state.filter(element => element.id !== action.payload);
        default:
            return state
    }
}