import React from 'react';
import { Alert, SafeAreaView, Button, ImageBackground, TextInput, Text, Image, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import styles from '../components/styles';


export default function createAccount({ navigation }) {

    var localUrl = 'http://10.1.5.75:3000/api/userValidation/CreateUser'

    const [userName, setUserName] = React.useState('');
    const [userPass, setUserPass] = React.useState('');
    const [userSecondPass, setSecondPass] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');

    function Separator() {
        return <View style={styles.separator} />;
    }

    function createAccount() {

        const request = async () => {

            const userObj = {
                name: userName,
                email: userEmail,
                password: userPass,
                secondPassword: userSecondPass,
            }

            console.log(userObj)
            
        fetch(localUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj)}) 
            .then((response,err) => response.json())
            .then((responseJson) => {
                console.log("Success" + JSON.stringify(responseJson))
            })
            .catch((err) => {
                console.error("err"+err);
            });
           
        }

        if(userName !== ''){
            userPass === userSecondPass ? request() : Alert.alert('second Password incorrect')
        }else{
            Alert.alert("something went wrong, please review the form")
        }      

    }

    return (
        <ImageBackground source={require('../pictures/Background4.jpg')} style={{ width: '100%', height: '100%', position: "relative" }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <SafeAreaView style={styles.LoginContainer}>
                    <Separator />
                    <View>
                        <Text>{userName}</Text>
                        <Text>{userEmail}</Text>
                        <Text>{userPass}</Text>
                        <Text>{userSecondPass}</Text>
                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={(val) => setUserName(val)}
                            placeholder={"User Name"}
                            autoCompleteType="username"
                        />
                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={(val) => setUserEmail(val)}
                            placeholder={"email"}
                            visible-password='email-address'
                            autoCompleteType="email"
                            keyboardType="email-address"
                            textContentType='emailAddress'
                        />
                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={(val) => setUserPass(val)}
                            autoCompleteType="password"
                            placeholder={"Password"}
                            type="password"
                            secureTextEntry={true}
                            visible-password='false'
                        />
                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={(val) => setSecondPass(val)}

                            autoCompleteType="password"
                            placeholder={"re-type password"}
                            secureTextEntry
                            visible-password='false'
                        />
                    </View>
                    <View style={styles.horizontal}>
                        <Button
                            title="Create Account "
                            onPress={() => createAccount()}
                            color={'#4e5eca'}
                        />
                        <Separator />
                        <Separator />
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

