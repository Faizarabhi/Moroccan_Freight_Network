import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Spacing, FontSize, Colors, Font } from "../constants";
import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<RootStackParamList, "Coordinate">;

const CoordinatScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    const [coordinate, setCoordinate] = useState({})
    
    console.log(coordinate)
    const TakeCoordiante = () => {
        navigate("Register")
    };
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
            >
                <Marker
                    draggable={true}
                    coordinate={{
                        latitude: 30.294750,
                        longitude: -9.233574
                    }}
                    onDragEnd={(e) => {
                        setCoordinate(e.nativeEvent.coordinate)
                    }}
                >

                </Marker>
            </MapView>
            <TouchableOpacity style={styles.bgbutton} onPress={TakeCoordiante}>
                <Text style={styles.button}>OK</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CoordinatScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    button: {
        // fontFamily: Font["poppins-bold"],
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
        shadowRadius: Spacing,
        position: 'absolute',
        right: 30,
        bottom: 70,
    },

});