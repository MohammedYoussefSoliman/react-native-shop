import React, { useState, useCallback, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../../models/product";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import * as actions from "../../store/actions/products";
import HeaderBtn from "../../components/UI/headerButton/headerButton";
import {
  ScrollView,
  Alert,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { formActions, formReducer } from "./formReducer";
import Input from "./input";

const EditProductScreen = ({ navigation }) => {
  const prodId = navigation.getParam("productId");
  const editProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  );
  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch();
  const formInitialState = {
    inputValues: {
      title: editProduct ? editProduct.title : "",
      imageUrl: editProduct ? editProduct.imageUrl : "",
      price: editProduct ? editProduct.price : "",
      description: editProduct ? editProduct.description : "",
    },
    validations: {
      title: editProduct ? true : false,
      imageUrl: editProduct ? true : false,
      price: editProduct ? true : false,
      description: editProduct ? true : false,
    },
    isFormValid: false,
  };

  const [formState, formDispatch] = useReducer(formReducer, formInitialState);

  const submitHandler = useCallback(() => {
    console.log("submitted !");

    if (!formState.isFormValid) {
      Alert.alert(
        "Something went wrong",
        "make sure that all feilds are entered",
        [{ text: "return", style: "destructive" }]
      );
      return;
    }

    if (editProduct) {
      // return edit
      const product = new Product(
        prodId,
        "u1",
        formState.inputValues.title,
        formState.inputValues.imageUrl,
        formState.inputValues.description,
        +editProduct.price
      );
      dispatch(actions.editProduct(product));
    } else {
      // return add
      const product = new Product(
        new Date().toString(),
        "u1",
        formState.inputValues.title,
        formState.inputValues.imageUrl,
        formState.inputValues.description,
        +formState.inputValues.price
      );
      dispatch(actions.addProduct(product));
    }
    navigation.goBack();
  }, [dispatch, formState]);

  useEffect(() => {
    navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const handleFormInput = (value, inputName) => {
    if (value.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    formDispatch({
      type: formActions.FORM_INPUT_UPDATE,
      value: value,
      input: inputName,
      isValid,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.form}>
        <Input
          label="title"
          error="this field is required"
          value={formState.inputValues.title}
          isValid={formState.validations.title}
          changeHandler={(value) => handleFormInput(value, "title")}
          autoCapitalize="sentences"
        />
        <Input
          label="Image URL"
          error="this field is required"
          value={formState.inputValues.imageUrl}
          isValid={formState.validations.imageUrl}
          changeHandler={(value) => handleFormInput(value, "imageUrl")}
        />

        {editProduct ? null : (
          <Input
            label="Price"
            error="this field is required"
            value={formState.inputValues.price}
            isValid={formState.validations.price}
            changeHandler={(value) => handleFormInput(value, "price")}
            keyboardType="decimal-pad"
          />
        )}
        <Input
          label="Description"
          error="this field is required"
          value={formState.inputValues.description}
          isValid={formState.validations.description}
          changeHandler={(value) => handleFormInput(value, "description")}
          autoCorrect
          autoCapitalize="sentences"
          multiline
          numberOfLines={4}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

EditProductScreen.navigationOptions = (navData) => {
  const prod = navData.navigation.getParam("productId");
  const submitFn = navData.navigation.getParam("submit");
  return {
    headerTitle: prod ? "Edit Product" : "Add Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="Save"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "Sarabun-Medium",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 4,
    paddingVertical: 5,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 2,
  },
});

export default EditProductScreen;
