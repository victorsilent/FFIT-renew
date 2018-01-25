import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
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
                    <Text style={styles.itemDrawer}>Band List</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.pushPath('ListAlbumsScreen')}>
                    <Text style={styles.itemDrawer}>List Albums</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.pushPath('LoginScreen')}>
                    <Text style={styles.itemDrawer}>Logout</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemDrawer: {
        backgroundColor: '#fff',
        padding: 10,
    }
})
export default TestScreen;