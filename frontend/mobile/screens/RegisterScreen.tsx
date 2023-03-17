import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import { Spacing, FontSize, Colors, Font } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";
import { useDispatch, useSelector } from "react-redux";
import { registerCompany } from "../app/features/auth/authSlice";
import { addData } from '../app/features/auth/authSlice';
import { useRoute } from "@react-navigation/native";


type Props = NativeStackScreenProps<RootStackParamList, "Register">;
interface RegisterFormData {
  companyName: string;
  email: string;
  password: string;
  tel: string,
  adress: string,
  lont: number,
  lat: number
}
 interface params {
  longitude: number;
  latitude: number;
}
const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  // const Data = useSelector(addData);
  // console.log(Data)
  const dispatch = useDispatch()
  const route = useRoute();
  const [formData, setFormData] = useState<RegisterFormData>({ companyName: '', email: '', password: '', tel: '', adress: '', lont: 0, lat: 0 });
  formData.lont = route.params?.params?.longitude || 0;
  formData.lat = route.params?.params?.latitude || 0;
  const handleRegister = () => {
    navigate('Home')
    dispatch(registerCompany(formData))

  };
  return (
    <SafeAreaView>
      <ScrollView
      >
        <View style={{ padding: Spacing * 2 }}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subTitle}>Create an account so you can add your copmany with others</Text>
          </View>
          <View style={{ marginVertical: Spacing * 3 }}>
            <AppTextInput value={formData.companyName} onChangeText={(value: any) => setFormData({ ...formData, companyName: value })} placeholder="companyName" />
            <AppTextInput value={formData.email} onChangeText={(value) => setFormData({ ...formData, email: value })} placeholder="Email" />
            <AppTextInput value={formData.password} secureTextEntry onChangeText={(value) => setFormData({ ...formData, password: value })} placeholder="Password" />
            <AppTextInput value={formData.tel} onChangeText={(value) => setFormData({ ...formData, tel: value })} placeholder="tel" />
            <AppTextInput value={formData.adress} onChangeText={(value) => setFormData({ ...formData, adress: value })} placeholder="Adress" />
            <AppTextInput value={formData.lont} onChangeText={(value: any) => setFormData({ ...formData, lont: value })} placeholder="Longitude" />
            <AppTextInput value={formData.lat} onChangeText={(value: any) => setFormData({ ...formData, lat: value })} placeholder="Latitude" />
            {/* <AppTextInput value={formData.lont} onChangeText={(value: any) => setFormData({ ...formData, lont: value })} placeholder="Longtitude" />
            <AppTextInput value={formData.lat} onChangeText={(value: any) => setFormData({ ...formData, lat: value })} placeholder="Latiude" /> */}
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
          <TouchableOpacity style={styles.bgbutton} onPress={handleRegister}>
            <Text style={styles.button} onPress={() => navigate('Coordinate')}>Take your Coordinate</Text>
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
      </ScrollView>
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
