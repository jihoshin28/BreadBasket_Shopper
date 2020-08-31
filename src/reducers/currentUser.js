export default (state = {}, action) => {
    if (action.type === "CURRENT_USER") {
        return {
            userAuthName: action.payload.first_name,
            userAuthPic: action.payload.image
        }
    }
    return state
}