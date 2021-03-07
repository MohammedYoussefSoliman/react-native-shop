import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CartItem from "./cartItem";
import Colors from "../../constants/colors";

const OrderItem = ({ amount, date, items }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.orderContainer}>
      <View style={styles.orderSummery}>
        <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button
        title={showDetails ? "Hide details" : "View details"}
        color={Colors.primary}
        onPress={() => setShowDetails((prev) => !prev)}
      />

      {showDetails && (
        <View>
          {items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              title={cartItem.title}
              amount={cartItem.sum}
              deletable={false}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
  },
  orderSummery: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  amount: {
    fontFamily: "Sarabun-Bold",
    fontSize: 16,
  },
  date: {
    fontFamily: "Sarabun-Regular",
    fontSize: 16,
  },
});

export default OrderItem;
