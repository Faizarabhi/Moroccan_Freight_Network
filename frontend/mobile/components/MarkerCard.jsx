import React from 'react'
import {
    Switch,
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
} from "react-native";
import CallouCards from './CallouCards';
import { Marker, Callout, Geojson } from 'react-native-maps';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';


const coordinate = {
    latitude: 30.294750,
    longitude: -9.233574
}

function MarkerCard() {
    const data = { email: "charikatokom@gmall.mcom", tel: "+121212f12", adress: "kk" }
    const { email, tel, adress } = data
    return (
        <Marker coordinate={coordinate}
            title={email}
            description={tel}
            pinColor="red">
            <View style={{ padding: 10 }}>
                <MaterialCommunityIcons name="truck-delivery" size={24} color="red" />
                <Feather name="map-pin" size={20} color="red" />
            </View>
            <CallouCards email={email} tel={tel} adress={adress} />
        </Marker>
    )
}

export default MarkerCard

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