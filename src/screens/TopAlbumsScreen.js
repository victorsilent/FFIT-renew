import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Album from '../components/Album';
import api from '../fakeAPI';

class TopAlbumsScreen extends Component {
    constructor(props){
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }
    componentWillMount(){
        this.setState({topAlbums: api.getAllAlbums()});
    }
    onNavigatorEvent(event) {
        if (event.type == 'DeepLink') {
            if(event.payload){
                return this.props.navigator.push({
                    screen: 'awesome-ffit.' + event.link,
                    passProps: {
                        payload: event.payload,
                    },
                    animationType: 'slide-horizontal',
                })
            }else{
                return this.props.navigator.push({
                    screen: 'awesome-ffit.' + event.link,
                    animationType: 'slide-horizontal',
                })
            }
        }
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

    render() {
        return (
            <ScrollView>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#fff'}}>
                    {this.state.topAlbums.map((album) => {
                        return <Album key={album.id} albumImage={album.albumPicture} bandName={album.bandName} albumName={album.name} onPressed={() => this.pushPath(`Player/${album.id}`)}></Album>
                    })}
                </View>
            </ScrollView>
        );
    }
}

export default TopAlbumsScreen;