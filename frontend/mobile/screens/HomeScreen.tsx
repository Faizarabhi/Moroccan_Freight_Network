import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  const { width } = Dimensions.get("window");
  
  const ITEM_WIDTH = width / 2 - 10 * 3;
  
  const HomeScreen = () => {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>HomeScreen</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({});