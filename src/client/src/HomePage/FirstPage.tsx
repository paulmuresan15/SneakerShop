import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
// import Slideshow from "./Slideshow";
import logo from "C:/Users/Andreea/IdeaProjects/SneakerShop/src/client/src/Components/sneaker.jpg";
import slide1 from "C:/Users/Andreea/IdeaProjects/SneakerShop/src/client/src/Pictures/slideshow_1.jpg";
import Button_right from "./Button_right";

function FirstPage() {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Text style={styles.imageStyle}>
          <img src={logo} width="100" height="100" alt="React Bootstrap logo" />
        </Text>
      </View>
      <Text style={styles.navbarStyle}>
        <Navigation />
      </Text>
      <View style={styles.thirdContainer}>
        <Text>
          <Button_right onClick={() => console.log("You clicked on the pink circle!")} />
        </Text>
        <Text style={styles.centerSlide}>
          <img src={slide1} alt="The center of slideshow" />
        </Text>
      </View>
    </View>
  );
}
export default FirstPage;

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

  secondContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  thirdContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
  },

  centerSlide: {
    flex: 1,
  },
});
