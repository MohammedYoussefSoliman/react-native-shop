import ProductsData from "../../data/dummy-data";
import { DELETE_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT } from "../actions/products";

const initialState = {
  availableProducts: ProductsData,
  userProducts: ProductsData.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  let allProducts = [...state.availableProducts];
  switch (action.type) {
    case ADD_PRODUCT:
      allProducts.push(action.payload);
      return {
        ...state,
        availableProducts: allProducts,
        userProducts: allProducts.filter((prod) => prod.ownerId === "u1"),
      };
    case EDIT_PRODUCT:
      let productIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.payload.id
      );
      allProducts[productIndex] = {
        ...allProducts[productIndex],
        ...action.payload,
      };
      return {
        ...state,
        availableProducts: allProducts,
        userProducts: allProducts.filter((prod) => prod.ownerId === "u1"),
      };
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
