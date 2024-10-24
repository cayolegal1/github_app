import { StyleSheet, Platform } from "react-native";
import { COLORS } from "@/theme/colors";
import { RADIUS, SPACES, TEXT_SIZE, BOX_SIZE } from "@/theme/sizes";

export const inputStyles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    borderColor: COLORS.OPACITY_BLACK,
    borderRadius: RADIUS.big,
    borderWidth: 1,
    flexDirection: "row",
    height: BOX_SIZE.normal,
    marginTop: SPACES.min,
    marginBottom: SPACES.normal,
    position: "relative",
    width: "100%",
    ...Platform.select({
      ios: { padding: SPACES.min },
      android: {
        paddingHorizontal: SPACES.normal,
        paddingVertical: 5,
      },
    }),
  },
  input: {
    color: COLORS.TEXT_COLOR_NORMAL,
    flex: 10,
    fontSize: TEXT_SIZE.normal,
    height: "100%",
    marginTop: 5,
    minHeight: 48,
    paddingHorizontal: SPACES.min,
    width: "100%",
  },
  rightContent: {
    flex: 1,
    position: "absolute",
    right: 23,
  },
});
