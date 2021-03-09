import ProductsData from "../../data/dummy-data";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
  availableProducts: ProductsData,
  userProducts: ProductsData.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        availableProducts: state.availableProducts.filter(
          (prod) => prod.id !== action.payload
        ),
        userProducts: state.userProducts.filter(
          (prod) => prod.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
