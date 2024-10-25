import { StyleSheet } from "react-native";
import { BOX_SIZE, RADIUS, SPACES, TEXT_SIZE } from "@/theme/sizes";
import { COLORS } from "@/theme/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: SPACES.min,
    margin: SPACES.min,
    padding: SPACES.normal,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    width: BOX_SIZE.fullWidth * 0.9,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACES.min,
  },
  repoName: {
    fontSize: TEXT_SIZE.big,
    fontWeight: "bold",
    color: COLORS.PRIMARY,
  },
  description: {
    color: "#666",
    fontSize: TEXT_SIZE.normal,
    marginBottom: SPACES.simple,
  },
  language: {
    fontSize: TEXT_SIZE.small,
    color: COLORS.TEXT_COLOR_NORMAL,
    marginBottom: SPACES.simple,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: SPACES.simple,
  },
  stat: {
    fontSize: TEXT_SIZE.normal,
    color: "#333",
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: RADIUS.simple,
    padding: SPACES.min,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  textBold: {
    fontWeight: "bold",
  },
});

export default styles;
