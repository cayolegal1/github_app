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
  avatar: {
    alignSelf: "center",
    borderRadius: RADIUS.avatar,
    height: 100,
    width: 100,
  },
  name: {
    fontSize: TEXT_SIZE.big,
    fontWeight: "bold",
    marginVertical: SPACES.min,
    textAlign: "center",
  },
  bio: {
    color: "#666",
    fontSize: TEXT_SIZE.normal,
    marginBottom: SPACES.simple,
    textAlign: "center",
  },
  locationContainer: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: SPACES.simple,
  },
  location: {
    marginLeft: SPACES.min,
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
