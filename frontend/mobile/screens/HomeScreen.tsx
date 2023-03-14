import {
  Switch,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  FlatList
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Geojson } from 'react-native-maps';
import React, { useState } from "react";
import { styled } from './StyleMap';
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
const { height, width } = Dimensions.get("window");
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
  console.log("coordinate:", myPlace.features[0].geometry.coordinates[0], "||", myPlace.features[0].geometry.coordinates[1])
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        // company name / email / password / adress // lat lont
        customMapStyle={isEnabled ? styled : []}
      >
        <Geojson
          geojson={myPlace}
        />
        <Marker coordinate={{
          latitude: 37.78825,
          longitude: -122.4324
        }}
          title="hello"
          description="this is discription"
          pinColor="red">
          <View style={{ padding: 10 }}>
            <MaterialCommunityIcons name="truck-delivery" size={24} color="red" />
            <Feather name="map-pin" size={20} color="red" />
          </View>
          <Callout tooltip style={{ padding: 12 }}>
            <View style={{
              height: 150, width: 200, flexDirection: "column", position: "relative", justifyContent: "center",
            }}>
              <View style={[{ justifyContent: "center", alignItems: "center", alignContent: "center" }, { backgroundColor: "white", maxWidth: '100%', borderRadius: 12 }]}>
                <View style={[{ backgroundColor: "#fec", borderRadius: 40, width: 60, height: 60, position: "absolute", top: -35, left: "35%", zIndex: 1, borderWidth: 6, borderColor: "white" }]}>
                  <Image source={{ uri: 'https://asstra.com/assets/templates/html/images/new_year_logo.png' }} style={{ resizeMode: 'contain', width: "100%", height: "100%" }} />
                </View>
                <View style={{ height: "70%", justifyContent: "center", alignItems: "center", alignContent: "center", padding: 12 }}>
                  <FlatList
                    data={[{ name: "faiza", tel: "06 16 18 77", id: 12 }]}
                    renderItem={({ item }) => <>
                      <Text style={styles.item}>name :{item.name}</Text>
                      <Text style={styles.item}>tel  : {item.tel}</Text>
                    </>
                    }
                  // keyExtractor={(item) => item.id}
                  />
                </View>
              </View>
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