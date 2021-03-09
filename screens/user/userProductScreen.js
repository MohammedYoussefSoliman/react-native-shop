import React from "react";
import { FlatList, Button, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../store/actions/products";
import ProductItem from "../../components/shop/ProductItem";
import HeaderBtn from "../../components/UI/headerButton/headerButton";
import Colors from "../../constants/colors";

const UserProducts = () => {
  const users = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();
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
          <Button color={Colors.primary} title="edit" onPress={() => {}} />
          <Button
            color={Colors.primary}
            title="delete"
            onPress={() => {
              dispatch(deleteProduct(itemData.item.id));
            }}
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
  };
};

export default UserProducts;
