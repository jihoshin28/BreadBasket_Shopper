const INTIAL_STATE = {
    signedIn: null,
    currentShopper: {
        shopper_info: {}
    },
    
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {
                ...state, 
                signedIn: true,
                currentShopper: action.payload
            }
        case 'SIGN_OUT':
            return {
                ...state, 
                signedIn: false, 
                currentShopper: {}
            }
        case 'PROFILE_INFO':
            return{
                ...state, currentShopper: { 
                        ...state.currentShopper,
                        shopper_info: action.payload
                }
            }
        case 'EDIT_SHOPPER':
            return{
                ...state, currentShopper: action.payload
            }
        case 'EDIT_PROFILE':
            return{
                ...state, currentShopper: {
                    ...state.currentShopper,
                    shopper_info: action.payload
                }
            }

        case 'GET_SHOPPER_NUMBERS': {
            return {
                ...state, currentShopper: {
                    ...state.currentShopper,
                    shopper_numbers: action.payload
                }
            }
        }
        case 'GET_SHOPPER_EMAILS': {
            return {
                ...state, currentShopper: {
                    ...state.currentShopper,
                    shopper_emails: action.payload
                }
            }
        }
        case 'GET_SHOPPER_ADDRESSES': {
            return {
                ...state, currentShopper: {
                    ...state.currentShopper,
                    shopper_addresses: action.payload
                }
            }
        }
        default:
            return state 
    }
}