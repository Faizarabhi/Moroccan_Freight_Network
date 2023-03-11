import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput onFocus={() => { setFocused(true) }} onBlur={() => { setFocused(false) }}  placeholderTextColor={Colors.darkText} style={[styles.input, focused && { borderWidth: 2, borderColor: Colors.primary ,shadowOffset:{width:4,height:Spacing},shadowColor:Colors.primary,shadowOpacity:0.3,shadowRadius:Spacing}]}
      {...otherProps} />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.small,
    backgroundColor: Colors.lightPrimary,
    padding: Spacing * 2,
    borderRadius: Spacing,
    marginVertical: Spacing
  },
});
