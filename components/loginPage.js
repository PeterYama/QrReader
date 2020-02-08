import React from 'react';
import { Alert, SafeAreaView, Button, ImageBackground, TextInput, Text, Image, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import styles from '../components/styles';
import Login from '../controllers/facebook';


export default function UserLogin({ navigation }) {
  var cloudUrl = 'https://shumazhi.appspot.com/api/userValidation/validate';
  // var localUrl = 'http://10.1.5.75:3000/api/userValidation/validate'

  // the user name and password is being updates as the user type
  // grab that data and make a request to the backend
  const [email, setEmail] = React.useState("user.email");
  const [userPassword, setUserPassword] = React.useState("user.password");

  googleLogin = async () => {
    try {
      await GoogleSignIn.initAsync({ clientId: '305524967998-rauc6p3np4k2kaluojpovprt37b7ausm.apps.googleusercontent.com' });
    } catch ({ message }) {
      alert('GoogleSignIn.initAsync(): ' + message);
    }
    console.log(AppAuth)
  };

  function loginButtonHandler() {

    console.log("inside loginButtonHandler")

    fetch(cloudUrl, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: userPassword
      })
    }).then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          if (result.Account === 'false') {
            Alert.alert("Password is Wrong or user does not exist")
          } else {
            navigation.navigate('Camera View')
          }
        },
        (error) => {
          console.log(`Error while calling the API : ${error}`)
        }
      );
  }

  function Separator() {
    return <View style={styles.separator} />;
  }

  function createAccountHandler() {
    navigation.navigate('Create Account');
  }

  return (
    <ImageBackground source={require('../pictures/Background4.jpg')} style={{ width: '100%', height: '100%', position: "relative" }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.LoginContainer}>
          <Separator />

          <Text style={styles.logo}>Shumazhi</Text>

          <View>

            <TextInput
              style={{ height: 40, marginHorizontal: 50, borderColor: 'gray', borderBottomWidth: 1 }}
              onChangeText={(val) => setEmail(val)}
              placeholder={"Email"}

            />
            <TextInput
              style={{ height: 40, marginHorizontal: 50, borderColor: 'gray', borderBottomWidth: 1, marginTop: 15 }}
              onChangeText={(val) => setUserPassword(val)}
              placeholder={"Password"}
            />
          </View>

          <View style={styles.horizontal}>
            <Button
              title="Login"
              onPress={() => loginButtonHandler()}
              color={'#4e5eca'}
            />
            <View style={styles.smallSeparator}></View>

            <Button
              title="Create Account"
              onPress={() => createAccountHandler()}
              color={'#24267c'}
            />

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 30 }}>
            <FontAwesome name="facebook-official" size={42} color="#ffffff" onPress={() => Login()} />
            <MaterialCommunityIcons name="gmail" size={42} color="#ffffff" onPress={() => googleLogin()} />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  )
}

