import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../../models/product";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import * as actions from "../../store/actions/products";
import HeaderBtn from "../../components/UI/headerButton/headerButton";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Platform,
  StyleSheet,
} from "react-native";

const EditProductScreen = ({ navigation }) => {
  const prodId = navigation.getParam("productId");
  const editProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  );
  const [title, setTitle] = useState(editProduct ? editProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editProduct ? editProduct.imageUrl : ""
  );
  const [price, setPrice] = useState(editProduct ? editProduct.price : "");
  const [description, setDescription] = useState(
    editProduct ? editProduct.description : ""
  );

  const dispatch = useDispatch();

  const submitHandler = useCallback(() => {
    console.log("submitted !");

    if (editProduct) {
      // return edit
      const product = new Product(
        prodId,
        "u1",
        title,
        imageUrl,
        description,
        +editProduct.price
      );
      dispatch(actions.editProduct(product));
      console.log("submitted edit product");
      console.log(product);
    } else {
      // return add
      const product = new Product(
        new Date().toString(),
        "u1",
        title,
        imageUrl,
        description,
        +price
      );
      dispatch(actions.addProduct(product));
      console.log("submitted add product");
      console.log(product);
    }
    navigation.goBack();
  }, [title, imageUrl, description, price]);

  useEffect(() => {
    navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView style={styles.form}>
      <View style={styles.formControl}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
        />
      </View>
      {editProduct ? null : (
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            value={"" + price}
            onChangeText={(text) => setPrice(text)}
          />
        </View>
      )}
      <View style={styles.formControl}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
    </ScrollView>
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
