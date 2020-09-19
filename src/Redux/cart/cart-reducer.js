const INITIAL_STATE = {
    cartStatus: false
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'TOGGLE_CART_STATUS':
            return {
                ...state,
                cartStatus: !state.cartStatus
            }
    
        default:
            return state
    }
}

export default cartReducer;