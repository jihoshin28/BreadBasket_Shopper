const INTIAL_STATE = {
    signedIn: null,
    userAuthId: null,
    userAuthPic: null,
    userAuthName: null
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {...state, 
                signedIn: true,
                userAuthId: action.payload.id,
                userAuthPic: action.payload.image,
                userAuthName: action.payload.first_name + ' ' + action.payload.last_name
            }
        case 'SIGN_OUT':
            return {...state, 
                signedIn: false, 
                userAuthId: null,
                userAuthPic: null,
                userAuthName: null
            }
        default:
            return state 
    }
    console.log(state)
}