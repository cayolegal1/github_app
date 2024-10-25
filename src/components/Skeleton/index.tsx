import React, { type FC } from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { COLORS } from "@/theme/colors";
import { SPACES, BOX_SIZE } from "@/theme/sizes";
import type { SkeletonProps, SkeletonVariant } from "./Skeleton.types";

const Skeleton: FC<SkeletonProps> = ({ variant = "default" }) => {
  const skeletonHeight: Record<SkeletonVariant, number> = {
    default: BOX_SIZE.defaultHeight,
    normal: BOX_SIZE.normalHeight,
  };

  return (
    <ContentLoader
      style={{ margin: SPACES.min }}
      width={BOX_SIZE.fullWidth}
      foregroundColor="#d6d6d6"
      backgroundColor={COLORS.LOADER}
      height={skeletonHeight[variant]}
      viewBox={`0 0 ${BOX_SIZE.fullWidth} ${skeletonHeight[variant]}`}
    >
      <Rect x="0" y="0" rx="10" ry="10" width="100%" height="100%" />
    </ContentLoader>
  );
};

export default Skeleton;
