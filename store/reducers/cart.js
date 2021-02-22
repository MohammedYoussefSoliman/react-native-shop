import {ADD_TO_CART} from '../actions/cart';
import CartItem from '../../models/cartItem'

const initialState = {
    items: {},
    totalAmount: 0
}


export default (state = initialState, action) => {

    switch(action.type) {

        case ADD_TO_CART:
            const addedProduct = action.payload;
            let AddedCartItem;
            if(state.items[addedProduct.id]) {

                AddedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity+1,
                    state.items[addedProduct.id].price,
                    addedProduct.title,
                    state.items[addedProduct.id].sum+addedProduct.price);

            }else{
                AddedCartItem = new CartItem(1, addedProduct.price, addedProduct.title, addedProduct.price);
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [addedProduct.id]: AddedCartItem
                },
                totalAmount: state.totalAmount + AddedCartItem.price
            }
            
        }
        return state

}