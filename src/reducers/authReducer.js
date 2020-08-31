const INTIAL_STATE = {
    signedIn: null,
    userAuthPic: null,
    userAuthName: null
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {...state, 
                signedIn: true,
                userAuthPic: action.payload.image,
                userAuthName: action.payload.name
            }
        case 'SIGN_OUT':
            return {...state, 
                signedIn: false, 
                userAuthPic: null,
                userAuthName: null
            }
        default:
            return state 
    }
    console.log(state)
}