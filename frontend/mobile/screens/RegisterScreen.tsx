import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import React, { useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/authActions';
import AppTextInput from "../components/AppTextInput";
import { useAppDispatch } from "../redux/hooks";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<RegisterFormData>({ name: 'youness', email: 'maska@madkasdsd.com', password: 'maska' });
  const handleRegister = () => {
  // console.log(formData)
  dispatch(registerUser(formData));
};
  return (
    <SafeAreaView>
      <View style={{ padding: Spacing * 2 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subTitle}>Create an account so you can add your copmany with others</Text>
        </View>
        <View style={{ marginVertical: Spacing * 3 }}>
          <AppTextInput value={formData.name} onChangeText={(value) => setFormData({ ...formData, name: value })} placeholder="Username" />
          <AppTextInput value={formData.email} onChangeText={(value) => setFormData({ ...formData, email: value })} placeholder="Email" />
          <AppTextInput value={formData.password} secureTextEntry onChangeText={(value) => setFormData({ ...formData, password: value })} placeholder="Password" />
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
        <TouchableOpacity style={styles.bgbutton} onPress={handleRegister}>
          <Text style={styles.button}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          padding: Spacing * 2,
        }}
          onPress={() => navigate("Login")}>
          <Text style={{ fontFamily: Font["poppins-bold"], color: Colors.text, textAlign: "center", fontSize: FontSize.small }} onPress={() => navigate("Login")}> Alread have an account</Text>
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

export default RegisterScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    marginVertical: Spacing * 3
  },
  subTitle: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.small,
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
  icon: {
    padding: Spacing,
    backgroundColor: Colors.gray,
    borderRadius: Spacing / 2,
    marginHorizontal: Spacing
  }
});
