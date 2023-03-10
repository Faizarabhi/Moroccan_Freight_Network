import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View >
        <ImageBackground style={{ height: height / 2.5 }} resizeMode="contain" source={require("../assets/images/welcome-img.png")} />
      </View>
      <View style={{ paddingHorizontal: Spacing * 4, paddingTop: Spacing * 4 }}>
        <Text style={styles.title}>Find Your Company Here</Text>
        <Text style={styles.subTitle}>Find Your Company Here Find Your Company Here Find Your Company Here</Text>
        <View style={{ paddingHorizontal: Spacing * 2, paddingTop: Spacing * 6, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={styles.bgLogin}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("Register")} style={styles.bgRegister}>
            <Text style={styles.register}>register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.xxLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    textAlign: "center"
  },
  subTitle: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Font["poppins-regular"],
    textAlign: "center",
    marginTop: Spacing * 6
  },
  bgLogin: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: '48%',
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing
  },
  login: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large
  },
  bgRegister: {
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: '48%',
    borderRadius: Spacing
  },
  register: {
    fontFamily: Font["poppins-bold"],
    color: Colors.text,
    textAlign: "center",
    fontSize: FontSize.large
  }
});
