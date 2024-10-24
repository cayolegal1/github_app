import React, { memo, type FC } from "react";
import { TextInput, View } from "react-native";

// assets
import { inputStyles } from "./Input.styles";
import { COLORS } from "@/theme/colors";

// types
import type { InputProps } from "./Input.types";

export const InputText: FC<InputProps> = memo(({ icon, ...props }) => {
  return (
    <>
      <View style={inputStyles.inputContainer}>
        <TextInput
          {...props}
          placeholderTextColor={COLORS.OPACITY_BLACK}
          style={inputStyles.input}
        />
        {icon && <View style={inputStyles.rightContent}>{icon}</View>}
      </View>
    </>
  );
});
