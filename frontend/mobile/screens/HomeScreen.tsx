import {
  Switch,
  StyleSheet,
  View,
  FlatList
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState, useEffect } from "react";
import { styled } from './StyleMap';
import MarkerCard from "../components/MarkerCard";
import { useDispatch, useSelector } from "react-redux";
import { companysData } from "../app/features/auth/authSlice";
import { RootState } from "../app/store";
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
  const { companies }: any = useSelector((state: RootState) => state.auth);
  // const [data,setData] = useState(companies)
  if (companies) {
    // setData(companies)
    // console.log(data)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(companysData())

  }, [])
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

        <FlatList
          data={companies}
          renderItem={({ item }) => <MarkerCard email={item.email} tel={item.tel} adress={item.adress} long={item.lont} lat= {item.lat}/>}
          keyExtractor={item => item._id}
        />

        {/* {companies.map((item: any, index: any) => (
          <MarkerCard key={index}  lat={companies[0].lat} lont={companies[0].lont}
           />
        ))} */}
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