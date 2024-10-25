import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export const SPACES = {
  big: 40,
  normal: 20,
  simple: 15,
  min: 10,
  small: 5,
};

export const TEXT_SIZE = {
  big: 18,
  min: 12,
  normal: 14,
  small: 10,
  title_big: 25,
  title_section: 16,
};

export const RADIUS = {
  avatar: 50,
  big: 10,
  simple: 6,
  small: 4,
};

export const BOX_SIZE = {
  defaultHeight: screenHeight * 0.35,
  fullWidth: screenWidth * 0.9,
  normal: 46,
  normalHeight: screenHeight * 0.3,
};
