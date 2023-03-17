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

const HomeScreen = () => {
  const { companies }: any = useSelector((state: RootState) => state.auth);

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
        {companies?.map((item: any) => (
          <MarkerCard
            key={item._id}
            id={item._id}
            address={item.adress}
            email={item.email}
            tel={item.tel}
            long={item.lont}
            lat={item.lat}
          />
        ))}
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