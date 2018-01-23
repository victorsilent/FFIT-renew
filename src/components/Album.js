import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const Album = ({ bandName, albumName, albumImage, onPress}) => {
    return (
        <TouchableOpacity onPress={() => () => {}}>
            <View style={styles.card}>
                <Image
                    resizeMode="cover"
                    style={styles.cardImage}
                    source={{uri: "http://via.placeholder.com/300x300"}}
                ></Image>
                <View style={styles.contentCard}>
                    <Text style={styles.albumName}>{albumName}</Text>
                    <Text style={styles.bandName}>{bandName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        width: (width/2) - 15,
        height: 180,
        marginTop: 10,
        marginLeft: 10,
    },
    cardImage: {
        width: (width/2) - 15,
        height: 140,
    },
    contentCard: {
        backgroundColor: "#fff",
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 5,
    },
    albumName: {
        fontWeight: 'bold',
    },
    bandName: {
        fontSize: 10,
    }
})

export default Album;
