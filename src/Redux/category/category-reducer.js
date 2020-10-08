const INITIAL_STATE = {
    allCategories: {}
}

const categoryReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'UPDATE_CATEGORY':
            return {
                ...state,
                allCategories: action.payload
            }
    
        default:
            return state
    }
}

export default categoryReducer;