import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProductOverviewScreen from "../screens/shop/productOverViewScreen";
import ProductDetailsScreen from "../screens/shop/productDetailsScreen";
import UserProducts from "../screens/user/userProductScreen";
import CartScreen from "../screens/shop/cartScreen";
import OrdersScreen from "../screens/shop/ordersScreen";
import Colors from "../constants/colors";

const navigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "Sarabun-Bold",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};
const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductOverviewScreen,
    ProductDetails: ProductDetailsScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: navigationOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: navigationOptions,
  }
);
const AdminNavigator = createStackNavigator(
  {
    Admin: UserProducts,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-create" : "ios-create"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: navigationOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    // route config
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
  },
  {
    // navigation config
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
