const INITIAL_STATE = {
    allProducts: []
}

const productReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'UPDATE_PRODUCTS':
            return {
                ...state,
                allProducts: action.payload
            }
    
        default:
            return state
    }
}

export default productReducer;