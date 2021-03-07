import React from "react";
import { FlatList, Button, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import * as cartAction from "../../store/actions/cart";
import ProductItem from "../../components/shop/ProductItem";
import HeaderBtn from "../../components/UI/headerButton/headerButton";
import Colors from "../../constants/colors";

const ProductOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  const selectItemHandler = (id, title) => {
    navigation.navigate("ProductDetails", {
      prodId: id,
      prodTitle: title,
    });
  };
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.imageUrl}
          onSelect={() =>
            selectItemHandler(itemData.item.id, itemData.item.title)
          }
        >
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() =>
              selectItemHandler(itemData.item.id, itemData.item.title)
            }
          />
          <Button
            color={Colors.primary}
            title="Add to cart"
            onPress={() => {
              dispatch(cartAction.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Products",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
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

export default ProductOverviewScreen;
