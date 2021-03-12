import React from "react";
import { FlatList, Button, Alert, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderBtn from "../../components/UI/headerButton/headerButton";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../store/actions/products";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/colors";

const UserProducts = ({ navigation }) => {
  const users = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();
  const handleEditProduct = (id) => {
    navigation.navigate("editeProducts", { productId: id });
  };

  const onDeleteHandler = (id) => {
    Alert.alert("Are you sure?", "You want to delete this product", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => dispatch(deleteProduct(id)),
      },
    ]);
  };

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={() => {}}
          onAddToCart={() => {}}
        >
          <Button
            color={Colors.primary}
            title="edit"
            onPress={() => {
              handleEditProduct(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="delete"
            onPress={() => onDeleteHandler(itemData.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

UserProducts.navigationOptions = (navData) => {
  return {
    headerTitle: "Admin Products",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="Add"
          iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
          onPress={() => {
            navData.navigation.navigate("editeProducts");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserProducts;
