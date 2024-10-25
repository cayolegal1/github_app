import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Platform.OS === "ios" ? "90%" : "100%",
  },
});

export default styles;
