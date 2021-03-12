import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/shop/cartItem";
import { removeCartItem } from "../../store/actions/cart";
import { addOrder } from "../../store/actions/order";
import Colors from "../../constants/colors";

const CartScreen = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    let allItems = [];
    for (let key in state.cart.items) {
      allItems.push({
        id: key,
        title: state.cart.items[key].title,
        price: state.cart.items[key].price,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return allItems.sort((a, b) => (a.id > b.id ? 1 : -1));
  });
  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <View style={styles.summery}>
        <Text style={styles.summeryText}>
          <Text style={styles.amount}>
            Total: ${Math.round(totalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        <Button
          title="Order Now"
          onPress={() => dispatch(addOrder(cartItems, totalAmount))}
          disabled={cartItems.length === 0}
        />
      </View>
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <CartItem
              title={itemData.item.title}
              quantity={itemData.item.quantity}
              amount={itemData.item.sum}
              deletable={true}
              onRemove={() => {
                dispatch(removeCartItem(itemData.item.id));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: "Cart",
};

const styles = StyleSheet.create({
  screen: {
    margin: 16,
  },
  summery: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summeryText: {
    fontFamily: "Sarabun-Bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.accent,
  },
});

export default CartScreen;
