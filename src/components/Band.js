import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const Album = ({ bandName, musicCount, albumCount, bandImage}) => {
    return (
        <TouchableOpacity onPress={() => () => {}}>
            <View style={styles.card}>
                <Image
                    resizeMode="cover"
                    style={styles.cardImage}
                    source={{uri: "http://via.placeholder.com/300x300"}}
                ></Image>
                <View style={styles.contentCard}>
                    <Text style={styles.bandName}>{bandName}</Text>
                    <Text style={styles.description}>{`${musicCount} Songs ${albumCount} album(s) `}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        width: width,
        height: 150,
        marginTop: 5,
        position: 'relative',
    },
    cardImage: {
        width: '100%',
        height: 140,
    },
    contentCard: {
        backgroundColor: "transparent",
        paddingRight: 5,
        paddingLeft: 5,
        position: 'absolute',
        width: width,
        bottom: 20,
    },
    bandName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    description: {
        fontSize: 12,
        color: '#fff',
    }
})

export default Album;
