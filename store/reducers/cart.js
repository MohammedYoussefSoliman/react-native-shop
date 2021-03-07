import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cart";
import CartItem from "../../models/cartItem";
import { ADD_ORDER } from "../actions/order";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.payload;
      let AddedCartItem;
      if (state.items[addedProduct.id]) {
        AddedCartItem = new CartItem(
          state.items[addedProduct.id].id,
          state.items[addedProduct.id].quantity + 1,
          state.items[addedProduct.id].price,
          addedProduct.title,
          state.items[addedProduct.id].sum + addedProduct.price
        );
      } else {
        AddedCartItem = new CartItem(
          addedProduct.id,
          1,
          addedProduct.price,
          addedProduct.title,
          addedProduct.price
        );
      }
      return {
        ...state,
        items: {
          ...state.items,
          [addedProduct.id]: AddedCartItem,
        },
        totalAmount: state.totalAmount + AddedCartItem.price,
      };

    case REMOVE_TO_CART:
      const currentItem = state.items[action.payload];
      const currentItemQty = currentItem.quantity;
      let allItems;
      if (currentItemQty > 1) {
        let updatedCartItem = new CartItem(
          currentItem.id,
          currentItem.quantity - 1,
          currentItem.price,
          currentItem.title,
          currentItem.sum - currentItem.price
        );
        allItems = { ...state.items, [action.payload]: updatedCartItem };
      } else {
        allItems = { ...state.items };
        delete allItems[action.payload];
      }

      return {
        ...state,
        items: allItems,
        totalAmount: state.totalAmount - currentItem.price,
      };

    case ADD_ORDER:
      return initialState;
  }

  return state;
};
