export const cartAction = () => ({
    type: 'TOGGLE_CART_STATUS'
})

export const addItemToCart = (item) =>({
    type: 'ADD_ITEM',
    payload: item
})

export const removeItemFromCart = (item) =>({
    type: 'REMOVE_ITEM',
    payload: item
})

export const decraseProductQuantity = (item) =>({
    type : 'DECREASE_ITEM',
    payload: item
})

export const clearCartItems = () =>({
    type : 'CLEAR_CART'
})