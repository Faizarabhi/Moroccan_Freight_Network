import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { Marker, Callout, Geojson } from 'react-native-maps';
interface Props {
    email: string;
    tel: string;
    adress: string
}

const CallouCards = ({ email, tel, adress }: Props) => {
    return (
        <View>
            <Callout tooltip style={{ padding: 12 }}>
                <View style={{
                    height: 150, width: 200, flexDirection: "column", position: "relative", justifyContent: "center",
                }}>
                    <View style={[{ justifyContent: "center", alignItems: "center", alignContent: "center" }, { backgroundColor: "white", maxWidth: '100%', borderRadius: 12 }]}>
                        <View style={[{ backgroundColor: "#fec", borderRadius: 40, width: 60, height: 60, position: "absolute", top: -35, left: "35%", zIndex: 1, borderWidth: 6, borderColor: "white" }]}>
                            <Image source={{ uri: 'https://asstra.com/assets/templates/html/images/new_year_logo.png' }} style={{ resizeMode: 'contain', width: "100%", height: "100%" }} />
                        </View>
                        <View style={{ height: "70%", justifyContent: "center", alignItems: "center", alignContent: "center", padding: 12 }}>

                            <Text style={styles.item}>email :{email}</Text>
                            <Text style={styles.item}>tel  : {tel}</Text>
                            <Text style={styles.item}>adress  : {adress}</Text>

                        </View>
                    </View>
                </View>
            </Callout>
        </View>
    )
}

export default CallouCards

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