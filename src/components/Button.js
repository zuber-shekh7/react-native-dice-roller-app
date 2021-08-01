import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, handleOnSubmit, disabled }) => {
  const disabledStyle = disabled ? { backgroundColor: "grey" } : {};
  return (
    <TouchableOpacity disabled={disabled} onPress={() => handleOnSubmit()}>
      <Text style={[styles.button, disabledStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: "#fff",
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});

export default Button;
