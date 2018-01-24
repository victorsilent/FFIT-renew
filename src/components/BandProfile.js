import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const BandProfile = ({ bandName, description, albums, imageHeader }) => {
    return (
        <View>
            <Image
                resizeMode="cover"
                style={styles.cardImage}
                source={{uri: imageHeader}}
            ></Image>
            <View style={styles.container}>
                <Text style={styles.bandName}>{bandName}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={{marginBottom: 10, marginTop: 10, fontSize: 16}}>Albuns</Text>
                <View style={styles.containerAlbums}>
                    {albums.map((album) => {
                        return  <Image
                                    style={styles.icon}
                                    key={album.id}
                                    source={{uri: album.albumPicture}}
                                ></Image>
                    })}
                </View>
            </View>
        </View>
    );
};
const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    cardImage: {
        width: '100%',
        height: 250,
    },
    bandName: {
        fontSize: 18,
        marginBottom: 5,
    },
    containerAlbums:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    icon:{
        width: (width/3) - 20,
        height: (width/3) - 20,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
    },
    description:{
        fontSize: 10,
        marginBottom: 10,
    }
});
export default BandProfile;