import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AlbuItemList = ({albumName, imageAlbum, albumTotalTime, onPressed}) => {
    return (
        <TouchableOpacity onPress={onPressed}>
            <View style={styles.container}>
                <Image
                        resizeMode="cover"
                        style={styles.itemImage}
                        source={{uri: "http://via.placeholder.com/300x300"}}
                        ></Image>
                <Text style={styles.albumName}>{albumName}</Text>
                <Text style={styles.albumTotalTime}>{albumTotalTime}</Text>
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
    albumName: {
        flex: 4,
    },
    albumTotalTime: {
        flex: 1,
        color: "#aaa"
    }
});

export default AlbuItemList;