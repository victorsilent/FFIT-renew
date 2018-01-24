import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import AlbumItemList from '../components/AlbumItemList';
import api from '../fakeAPI';

class ListAlbumsScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            albums: api.getAllAlbums()
        }
    }
    componentDidMount(){
        this.props.navigator.setTitle({
            title: "Albums List"
        });
    }
    pushPath = (path) => {
        const parts = path.split('/')
        if(parts[1]){
            return this.props.navigator.handleDeepLink({
                link: parts[0],
                payload: parts[1]
            });
        }
        return this.props.navigator.handleDeepLink({
            link: parts[0],
        });
    }
    handleChange = (value) =>{
        this.setState({search: value})
    }
    render() {
        const items = this.state.albums.filter((album) => {
            return album.name.includes(this.state.search)
        })
        return (
            <ScrollView>
                <TextInput onChangeText={this.handleChange}></TextInput>
                <View style={{flex: 1}}>
                    {items.map((album) => {
                        return <AlbumItemList key={album.id} albumName={album.name}  albumTotalTime={album.albumTotalTime} imageAlbum={album.albumPicture} onPressed={() => this.pushPath(`Player/${album.id}`)}></AlbumItemList>
                    })}
                </View>
            </ScrollView>
        );
    }
}

export default ListAlbumsScreen;