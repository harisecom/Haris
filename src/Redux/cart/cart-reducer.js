import {multipleCartHandle, removeCartItem, decreaseProduct} from './cart-utils';

const INITIAL_STATE = {
    cartStatus: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'TOGGLE_CART_STATUS':
            return {
                ...state,
                cartStatus: !state.cartStatus
            }
        
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: multipleCartHandle(state.cartItems, action.payload)
            }
        
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }
        case 'DECREASE_ITEM':
            return {
                ...state,
                cartItems: decreaseProduct(state.cartItems, action.payload)
            }

        default:
            return state
    }
}

export default cartReducer;