const INITIAL_STATE = {
    searchbarStatus: false,
}

const searchbarReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'TOGGLE_SEARCHBAR_STATUS':
            return {
                ...state,
                searchbarStatus: !state.searchbarStatus
            }
        default:
            return state
    }
}

export default searchbarReducer;