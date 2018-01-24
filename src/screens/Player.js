import React, { Component } from 'react';
import { View, Text, Image, Slider,Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import IconF from 'react-native-vector-icons/MaterialIcons';
import api from '../fakeAPI';

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            intervalId: '',
            musicMinutes: 0,
            running: false,
            album: api.getAlbumById(this.props.payload),
        }
    }
    componentDidMount(){
        this.props.navigator.setTitle({
            title: this.state.album[0].name
        });
    }
    componentWillUnmount(){
        clearInterval(this.state.intervalId);
    }
    clearPlayer(){
        this.setState({
            musicMinutes: 0,
            running: false,
        })
    }
    timer = (payload, prop = 'start') => {
        if(!this.state.running){
            this.setState({
                musicMinutes: this.state.musicMinutes + payload
            })
        }
        if(prop === 'back'){
            this.setState({
                musicMinutes: this.state.musicMinutes - payload
            })
        }
        if(prop === 'next'){
            this.setState({
                musicMinutes: this.state.musicMinutes + payload
            })
        }
        if(this.state.musicMinutes > 100 || this.state.musicMinutes < 0) { 
            this.clearPlayer(0);
            clearInterval(this.state.intervalId);
        }
    }
    returnMusic = () => {
        clearInterval(this.state.intervalId);
        let intervalId;
        intervalId = setInterval(this.timer.bind(this, 1, 'back'), 50);
        this.setState({running: true})
        this.setState({intervalId: intervalId});
    }
    nextMusic = () => {
        clearInterval(this.state.intervalId);
        let intervalId;
        intervalId = setInterval(this.timer.bind(this, 1, 'next'), 50);
        this.setState({running: true})
        this.setState({intervalId: intervalId});
    }
    onPlay = () => {
        clearInterval(this.state.intervalId);
        let intervalId;
        this.setState({running: !this.state.running})
        intervalId = setInterval(this.timer.bind(this, 1), 400);
        this.setState({intervalId: intervalId});
    }
    updateTime = (value) => {
        this.setState({musicMinutes: value});
    }
    render() {
        return (
            <View>
                <Image
                    resizeMode="cover"
                    style={styles.imagePlayer}
                    source={{uri: this.state.album[0].albumPicture}}
                ></Image>
                <View >
                    <View style={styles.volumeControl}>
                        <Slider
                            onValueChange={this.updateTime}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#4F8EF7"
                            maximumTrackTintColor="#4F8EF7" 
                            value={this.state.musicMinutes} 
                            thumbTintColor="#4F8EF7" 
                            style={styles.slider}></Slider>
                    </View>
                    <Text style={styles.albumName}>{this.state.album[0].name}</Text>
                    <Text style={styles.bandName}>{this.state.album[0].bandName}</Text>
                    <View style={styles.starContainer}>
                        <IconF name="star-border" size={30} color="#000"/>
                        <IconF name="star-border" size={30} color="#000"/>
                        <IconF name="star-border" size={30} color="#000"/>
                        <IconF name="star-border" size={30} color="#000"/>
                        <IconF name="star-border" size={30} color="#000"/>
                    </View>
                    <View style={styles.controlers}>
                        <Icon onPress={this.returnMusic} name="previous"size={30} color="#4F8EF7"/>
                        <Icon onPress={this.onPlay} name="play"size={30} color="#4F8EF7"/>
                        <Icon onPress={this.nextMusic} name="next"size={30} color="#4F8EF7"/>
                    </View>
                    <View style={styles.volumeControl}>
                        <Icon name="volume-none"size={30} color="#4F8EF7"/>
                        <Slider minimumTrackTintColor="#4F8EF7" maximumTrackTintColor="#4F8EF7" thumbTintColor="#4F8EF7" style={styles.slider}></Slider>
                        <Icon name="volume"size={30} color="#4F8EF7"/>
                    </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    controlers: {
        alignSelf: 'center',
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imagePlayer:{
        width: '100%',
        height: 300,
    },
    albumName: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    bandName: {
        fontSize: 16,
        textAlign: 'center',
    },
    volumeControl:{
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    slider: {
        flex: 4
    },
    starContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }

})


export default Player;