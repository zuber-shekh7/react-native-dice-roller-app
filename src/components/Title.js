import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = ({ title, style }) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
export default Title;
