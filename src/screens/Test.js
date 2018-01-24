import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import App from '../../App';

class TestScreen extends Component {
    pushPath = (path) => {
        if(path === 'LoginScreen'){
            App();
        }
        return this.props.navigator.handleDeepLink({
            link: path,
        });
    }
    render() {
        return (
            <View style={{backgroundColor: "#fff", flex: 1}}>
                <TouchableHighlight onPress={() => this.pushPath('BandListScreen')}>
                    <Text>Band List</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.pushPath('ListAlbumsScreen')}>
                    <Text>List Albums</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.pushPath('LoginScreen')}>
                    <Text>Logout</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default TestScreen;