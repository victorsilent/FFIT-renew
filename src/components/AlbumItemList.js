import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AlbuItemList = ({bandName, imageAlbum, albumTotalTime}) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image
                        resizeMode="cover"
                        style={styles.itemImage}
                        source={{uri: "http://via.placeholder.com/300x300"}}
                        ></Image>
                <Text style={styles.bandName}>Teste</Text>
                <Text style={styles.albumTotalTime}>36:10</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        padding: 5,
    },
    itemImage: {
        width: 60,
        height: 60,
        marginRight: 10,
        flex: 1,
    },
    bandName: {
        flex: 4,
    },
    albumTotalTime: {
        flex: 1,
        color: "#aaa"
    }
});

export default AlbuItemList;