const INTIAL_STATE = {
    signedIn: null,
    currentUser: null
}

export default (state = INTIAL_STATE, action) => {
    console.log(action.payload)
    switch(action.type){
        case 'SIGN_IN':
            return {...state, 
                isSignedIn: true, 
                userAuthName: action.payload.first_name,
                userAuthPic: action.payload.image
            }
        case 'SIGN_OUT':
            return{...state, 
                isSignedIn: false, 
                userAuthName: null, 
                userAuthPic: null}
        default:
            return state 
    }
}