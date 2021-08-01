import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Title;
