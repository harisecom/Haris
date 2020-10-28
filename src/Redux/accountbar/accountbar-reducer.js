const INITIAL_STATE = {
    accountbarStatus: false,
}

const accountbarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_ACCOUNTBAR_STATUS':
            return {
                ...state,
                accountbarStatus: !state.accountbarStatus
            }
        default:
            return state    
    }
}
export default accountbarReducer;