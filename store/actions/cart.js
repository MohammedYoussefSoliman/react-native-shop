export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";


export const addToCart = product => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeCartItem = id => {
    return {
        type: REMOVE_TO_CART,
        payload: id
    }
}