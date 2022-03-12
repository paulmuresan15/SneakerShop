import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./HomePage/Navigation";
import logo from "./Components/sneaker.jpg";

function Sandbox() {
  return (
    <View style={styles.container}>
        <View style={styles.secondContainer}>
      <Text style={styles.imageStyle}>
        <img src={logo} width="100" height="100" alt="React Bootstrap logo" />
      </Text>
      </View>
      <Text style={styles.navbarStyle}>
        {" "}
        <Navigation />{" "}
      </Text>
    </View>
  );
}
export default Sandbox;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    flexWrap: "nowrap",
  },
  navbarStyle: {
    flex: 2,
    alignItems: "center",
  },
  imageStyle: {
    flex: 1,
  },

  secondContainer:{
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
});
