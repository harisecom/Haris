const INITIAL_STATE = {
    navbarStatus: false,
}

const navbarReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'TOGGLE_NAVBAR_STATUS':
            return {
                ...state,
                navbarStatus: !state.navbarStatus
            }
        default:
            return state
    }
}

export default navbarReducer;