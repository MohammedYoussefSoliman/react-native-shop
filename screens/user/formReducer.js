export const formActions = {
  FORM_INPUT_UPDATE: "FORM_INPUT_UPDATE",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case formActions.FORM_INPUT_UPDATE:
      let updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };
      let updatedValidations = {
        ...state.validations,
        [action.input]: action.isValid,
      };
      let UpdatedIsFormValid = true;
      for (let key in updatedValidations) {
        UpdatedIsFormValid = UpdatedIsFormValid && updatedValidations[key];
      }
      return {
        ...state,
        inputValues: updatedValues,
        validations: updatedValidations,
        isFormValid: UpdatedIsFormValid,
      };
    default:
      return state;
  }
};
