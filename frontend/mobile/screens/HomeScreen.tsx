import {
  Switch,
  StyleSheet,
  View
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState, useEffect } from "react";
import { styled } from './StyleMap';
import MarkerCard from "../components/MarkerCard";
let a = [
  [100.0, 0.0],
  [103.0, 1.0],
  [104.0, 0.0],
  [105.0, 1.0]]
const myPlace = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Polygon',
      properties: {},
      geometry: {
        type: 'MultiPoint',
        coordinates: a,
      }
    }
  ]
};
const HomeScreen = () => {
  useEffect(() => {
  })
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        customMapStyle={isEnabled ? styled : []}
      >
        {/* <Geojson
          geojson={myPlace}
        /> */}




        <MarkerCard />
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
  item: {

  },
  map: {
    height: "100%"
  },
  callout: {
    height: 150,
    widht: 200,
  },
  info: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
  },
  switch: {
    position: 'absolute',
    right: 30,
    bottom: 70,
  }
});