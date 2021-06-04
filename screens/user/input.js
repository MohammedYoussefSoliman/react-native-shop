import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const Input = ({ label, error, isValid, changeHandler, props }) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} onChangeText={changeHandler} />
      {!isValid && <Text style={styles.err}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
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
  err: {
    fontFamily: "Sarabun-Regular",
    marginVertical: 8,
    color: "#E22222",
  },
});
