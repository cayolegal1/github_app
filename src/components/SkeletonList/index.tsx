import React, { type FC } from "react";
import { ScrollView } from "react-native";
import Skeleton from "../Skeleton";
import type { SkeletonListProps } from "./SkeletonList.types";

const skeletons = Array.from(Array(4).keys());

const SkeletonList: FC<SkeletonListProps> = ({ variant }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      {skeletons.map(item => (
        <Skeleton key={item} variant={variant} />
      ))}
    </ScrollView>
  );
};

export default SkeletonList;
