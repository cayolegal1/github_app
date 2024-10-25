import React, { type FC } from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { COLORS } from "@/theme/colors";
import { SPACES, BOX_SIZE } from "@/theme/sizes";

export const Skeleton: FC = ({}) => {
  return (
    <ContentLoader
      style={{ margin: SPACES.min }}
      width={BOX_SIZE.fullWidth}
      foregroundColor="#d6d6d6"
      backgroundColor={COLORS.LOADER}
      height={BOX_SIZE.normalHeight}
      viewBox={`0 0 ${BOX_SIZE.fullWidth} ${BOX_SIZE.normalHeight}`}
    >
      <Rect x="0" y="0" rx="10" ry="10" width="100%" height="100%" />
    </ContentLoader>
  );
};
