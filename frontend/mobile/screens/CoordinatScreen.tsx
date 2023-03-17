import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Spacing, FontSize, Colors, Font } from "../constants";
import { RootStackParamList, coordinate } from "../types";
import { addData } from '../app/features/auth/authSlice';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { connect } from 'react-redux';

type Props = NativeStackScreenProps<RootStackParamList, "Coordinate"> & {
    addData: (data: coordinate) => void;
};

// interface State {
//     data: coordinate;
// }

const CoordinatScreen: React.FC<Props> = ({ navigation: { navigate }, addData }) => {
 
    const [coordinat, setCoordinat] = useState({ latitude: 30.24642028086129, longitude: -0.4687850922346115 })
    // console.log(coordinat)

    const TakeCoordiante = () => {
        if (coordinat) {
            addData(coordinat); // Call the action creator function to send data to the Redux store
            // navigate("Register");
            navigate("Register", { params: { longitude: coordinat.longitude, latitude: coordinat.latitude }});
        }
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                <Marker
                    draggable={true}
                    coordinate={{
                        latitude: 30.294750,
                        longitude: -9.233574
                    }}
                    onDragEnd={(e) => {
                        setCoordinat(e.nativeEvent.coordinate)
                    }}
                />
            </MapView>
            <TouchableOpacity style={styles.bgbutton} onPress={TakeCoordiante}>
                <Text style={styles.button}>OK</Text>
            </TouchableOpacity>
        </View>
    );
}

export default connect(null, { addData })(CoordinatScreen); // Wrap your component with the `connect` function and pass in the `addData` action creator function to the `mapDispatchToProps` argument

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
