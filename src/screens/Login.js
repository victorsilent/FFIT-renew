import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';
import Player from '../screens/Player';
import MainAppScreen from './MainAppScreen';

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '',
        }
    }
    handleLogin = (value) => {
        this.setState({login: value})
    }
    handlePassword = (value) => {
        this.setState({password: value})
    }
    handleSubmit = () => {
        if(this.state.login === 'admin' && this.state.password === 'admin'){
            MainAppScreen();
        }else{
            alert("Cadê os dados do login, parça?")
        }
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Image
                    style={styles.logo}
                    source={{uri: 'https://ffit.com.br/wp-content/themes/ffit/images/logo.png'}}
                />
                <View style={styles.containerInputs}>
                    <TextInput onChangeText={this.handleLogin} value={this.state.login} style={styles.login} placeholder="Digite seu login"></TextInput>
                    <TextInput onChangeText={this.handlePassword} value={this.state.password} style={styles.password} secureTextEntry={true} placeholder="Digite sua senha"/>
                    <Button title="Login" onPress={this.handleSubmit}/>
                </View>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    logo: {
        width: 300,
        height: 112,
    },
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    containerInputs: {
        width: '80%'
    },
    login:{
        marginTop: 20,
        marginBottom: 20,
    },
    password:{
        marginBottom: 20,
    }
});
export default LoginScreen;