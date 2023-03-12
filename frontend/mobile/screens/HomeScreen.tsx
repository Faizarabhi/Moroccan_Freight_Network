import {
  Switch,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import React, { useState } from "react";
import { styled } from './StyleMap'
const { height, width } = Dimensions.get("window");


const HomeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        customMapStyle={isEnabled ? styled : []}
      >
        <Marker coordinate={{
          latitude: 37.78825,
          longitude: -122.4324
        }}
          title="hello"
          description="this is discription"
          pinColor="red">
          <View style={{ backgroundColor: "#9998", padding: 10 }}>
            <Text>this our Comany</Text>
          </View>
          <Callout tooltip>
            <View style={styles.callout}>
              <Text>hello here</Text>
              <Image source={{ uri: 'https://k9-drupal-images.k.dk/vidensportal-drupal-images.k.dk/styles/main-wide-304/s3/2018/01-02/1514901686.jpg' }} style={styles.image} />
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  map: {
    height: "100%"
  },
  callout: {
    height: 200,
    widht: 200,
    backgroundColor: "white",
    flexDirection: "row"
  },
  image: { width: 100, height: "100%" },
  switch: {
    position: 'absolute',

    right: 30,
    bottom: 70,
  }
});