import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View style={{ padding: Spacing * 2 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Login here</Text>
          <Text style={styles.subTitle}>Create Account</Text>
        </View>
        <View style={{ marginVertical: Spacing * 3 }}>
          <TextInput placeholder="Email" placeholderTextColor={Colors.darkText} style={styles.input} />
          <TextInput placeholder="Password" secureTextEntry placeholderTextColor={Colors.darkText} style={styles.input} />
        </View>
        <View>
          <Text style={{
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.small,
            color: Colors.primary,
            alignSelf: "flex-end"
          }}>
            Forget Your Password ?
          </Text>
        </View>
        <TouchableOpacity style={styles.bgbutton}>
          <Text style={styles.button}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          padding: Spacing * 2,
        }}
        onPress={()=>navigate("Register")}>
          <Text style={{ fontFamily: Font["poppins-bold"], color: Colors.text, textAlign: "center", fontSize: FontSize.small }}>Create a new account</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: Font["poppins-bold"], color: Colors.primary, textAlign: "center", fontSize: FontSize.small }}>Or Continue with</Text>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="logo-google" color={Colors.text} size={Spacing * 2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="logo-apple" color={Colors.text} size={Spacing * 2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="logo-facebook" color={Colors.text} size={Spacing * 2} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    marginVertical: Spacing * 3
  },
  subTitle: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.large,
    maxWidth: "80%",
    textAlign: "center"
  },
  input: {
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.small,
    backgroundColor: Colors.lightPrimary,
    padding: Spacing * 2,
    borderRadius: Spacing,
    marginVertical: Spacing
  },
  button: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    fontSize: FontSize.large,
    textAlign: "center"
  },
  bgbutton: {
    padding: Spacing * 2,
    backgroundColor: Colors.primary,
    marginVertical: Spacing,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing
  },
  icons: {
    marginVertical: Spacing * 3,
    marginTop: Spacing,
    flexDirection: "row",
    justifyContent: "center"
  },
  icon:{
    padding: Spacing,
    backgroundColor: Colors.gray,
    borderRadius: Spacing / 2,
    marginHorizontal: Spacing
  }
});