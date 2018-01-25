import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Band from '../components/Band';
import api from '../fakeAPI';
import { sumMusics } from '../utils/helpers';

class BandListScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            bands: api.getAllBands()
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
    componentDidMount(){
        this.props.navigator.setTitle({
            title: "Bands List"
        });
    }
    handleChange = (value) =>{
        this.setState({search: value})
    }
    render() {
        const items = this.state.bands.filter((band) => {
            return band.name.includes(this.state.search)
        })
        return (
            <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
                <View>
                    <TextInput placeholder="Filtre a banda" onChangeText={this.handleChange}></TextInput>
                    <View>
                        {items.map((band) => {
                            return <Band musicCount={sumMusics(band.albums)} albumCount={band.albums.length} key={band.id} onPressed={() => this.pushPath(`BandProfileScreen/${band.id}`)} bandName={band.name}></Band>
                        })}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default BandListScreen;