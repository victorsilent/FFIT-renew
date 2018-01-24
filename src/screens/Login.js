import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Player from '../screens/Player';
import MainAppScreen from './MainAppScreen';

class LoginScreen extends Component {
    handler = () => {
        MainAppScreen();
    }
    render() {
        return (
            <View>
                <Button title="Login" onPress={this.handler}/>
            </View>
        );
    }
}

export default LoginScreen;