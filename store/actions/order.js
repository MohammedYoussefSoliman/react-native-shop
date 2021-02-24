export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (items, amount) => {
    return {
        type: ADD_ORDER,
        payload: {
            items, amount
        }
    }
}