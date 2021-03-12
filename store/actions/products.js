export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (prodId) => {
  return {
    type: DELETE_PRODUCT,
    payload: prodId,
  };
};
