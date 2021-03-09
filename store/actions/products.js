export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteProduct = (prodId) => {
  return {
    type: DELETE_PRODUCT,
    payload: prodId,
  };
};
