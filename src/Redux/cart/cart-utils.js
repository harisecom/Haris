export const multipleCartHandle = (productItems, newProduct) =>{
    const productExist = productItems.find((item) => item.id === newProduct.id);

    if(productExist){
        return productItems.map( item => {
            if(item.id === newProduct.id){
                return { ...item, quantity : item.quantity + 1}
            }
            
            return item
        })
    }

    return [ ...productItems, {...newProduct, quantity : 1}]
}

export const removeCartItem = (productItems, removeProduct) => {
    return productItems.filter(item => {
        return item.id !== removeProduct.id
    });
}

export const decreaseProduct = (productItems, decreaseProduct) =>{

    if(decreaseProduct.quantity === 1){
        return productItems.filter(item => {
            return item.id !== decreaseProduct.id
        })
    }

    return productItems.map( item => {
        if(item.id === decreaseProduct.id){
            return { ...item, quantity : item.quantity - 1 }
        }
        return item

    })
}