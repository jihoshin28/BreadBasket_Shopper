export default (state = [], action) => {
    if(action.type === 'GET_ITEMS'){
        return [action.payload]
    }
    return state
}