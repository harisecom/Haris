const INITIAL_STATE = {
    currentShippingType: null
}

const shippingTypeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SHIPPING_TYPE' :
            return {
                ...state,
                currentShippingType: action.payload
            }
        
        default: 
            return state;
    }
}
export default shippingTypeReducer;