import React, { Component } from 'react';
import { View, Text, Slider, ScrollView } from 'react-native';
import BandProfile from '../components/BandProfile';
import api from '../fakeAPI';

class BandProfileScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            band: api.getBandInfo(this.props.payload)
        }
    }
    componentDidMount(){
        this.props.navigator.setTitle({
            title: this.state.band[0].name
        });
    }

    render() {
        const band = this.state.band[0];
        return (
            <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
                <View style={{flex: 1}}>
                    <BandProfile bandName={band.name} description={band.description} albums={band.albums} imageHeader={band.bandProfile}></BandProfile>
                </View>
            </ScrollView>
        );
    }
}

export default BandProfileScreen;