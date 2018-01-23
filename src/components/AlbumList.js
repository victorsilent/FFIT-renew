import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AlbumItemList from './AlbumItemList';

const AlbumList = ({bandName, imageAlbum, albumTotalTime}) => {
    return (
        <View style={styles.wrapper}>
            {[1,2,3,4,5,6,8,9,1,0,2,43,5].map(() => {
                return <AlbumItemList></AlbumItemList>
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
    },
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

export default AlbumList;

