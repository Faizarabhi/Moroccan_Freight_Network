import React, { useState } from 'react'
import {
    
    StyleSheet,
    View,
   
} from "react-native";
import CallouCards from './CallouCards';
import { Marker, Callout, Geojson } from 'react-native-maps';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';




function MarkerCard({ long, lat, email, tel, address, id }) {

    // console.log("long :", long, "lat :", lat, "id:", id, email, tel, address)
    return (
        <Marker
            key={id}
            coordinate={{ latitude: lat, longitude: long }}
            title={email}
            description={tel}
            pinColor="red">
            <View style={{ padding: 10 }}>
                <MaterialCommunityIcons name="truck-delivery" size={24} color="red" />
                {/* <Feather name="map-pin" size={20} color="red" /> */}
            </View>
            <CallouCards email={email} tel={tel} address={address} />
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