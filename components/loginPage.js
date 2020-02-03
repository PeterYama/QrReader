import React from 'react';
import { Alert, SafeAreaView, Button, ImageBackground, TextInput, Text,Image, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import styles from '../components/styles';

 export default function UserLogin( { navigation } ) {

    // the user name and password is being updates as the user type
    // grab that data and make a request to the backend
    
    const [userName, setUserName] = React.useState("user.userName");
    const [userPassword, setUserPassword] = React.useState("user.password");

    function httpRequest(){
      console.log("inside httpRequest")

      fetch('http://10.1.5.15:3000/api/userValidation/validate', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName:'peter',
        password:'123'
      })
    }).then(res => res.json())
      .then(
        (result) => {
          console.log("result: "+ JSON.stringify(result))
            result.valid ? navigation.navigate('Camera View') : navigation.navigate('errorPage')
        },
        (error) => {
          console.log(`Error while calling the API : ${error}`)
        }
      );
    }

    function Separator() {
        return <View style={styles.separator} />;
      }

    function createAccountHandler(){
        Alert.alert('Create Account Clicked')
    }
    
    function loginButtonHandler(){
      if(userName==='user' & userPassword==='user'){
          navigation.navigate('Camera View');
      }else{
          console.log("user name or password are incorrect")
           navigation.navigate('Error Page');
      }    
    }

    return (
  <ImageBackground source={require('../pictures/Background4.jpg')} style={{width: '100%', height: '100%',position:"relative"}}>
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <SafeAreaView style={styles.LoginContainer}>
        <Separator/>
       
              <Text style={styles.logo}>Shumazhi</Text>

            <View>
              
            <TextInput
                  style={{ height: 40,marginHorizontal:50, borderColor: 'gray', borderBottomWidth: 1 }}
                  onChangeText={(val) => setUserName(val)}
                  placeholder={"User Name"}

                />
                <TextInput
              style={{ height: 40,marginHorizontal:50, borderColor: 'gray', borderBottomWidth: 1,marginTop:15 }}
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

            <View style={{flexDirection:'row',justifyContent: 'space-around', paddingBottom:30}}>
              <FontAwesome name="facebook-official" size={42} color="#ffffff" onPress={() => console.log('facebook Clicked')}/>
              <MaterialCommunityIcons name="gmail" size={42} color="#ffffff" onPress={() => httpRequest()}/>
            </View>
         </SafeAreaView>     
    </TouchableWithoutFeedback>
    </ImageBackground>
    )
  }

  