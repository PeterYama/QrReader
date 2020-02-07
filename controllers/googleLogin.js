import React from 'react';
import { Text, View, TableOfContentSection } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import styles from '../components/styles';


export default class AuthScreen extends React.Component {

        
    state = { user: null };

    componentDidMount() {
        this.initAsync();
    }

    initAsync = async () => {
        await GoogleSignIn.initAsync({
            clientId: '305524967998-rauc6p3np4k2kaluojpovprt37b7ausm.apps.googleusercontent.com',
        });
        this._syncUserWithStateAsync();
    };

    _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        this.setState({ user });
    };

    signOutAsync = async () => {
        await GoogleSignIn.signOutAsync();
        this.setState({ user: null });
    };

    signInAsync = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type === 'success') {
                this._syncUserWithStateAsync();
            }
        } catch ({ message }) {
            alert('login: Error:' + message);
        }
    };

    onPress = () => {
        if (this.state.user) {
            this.signOutAsync();
        } else {
            this.signInAsync();
        }
    };

    render() {
        return <View style={styles.container}>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
                <Text onPress={this.onPress}>Toggle Auth</Text>
              </View>;
    }
}