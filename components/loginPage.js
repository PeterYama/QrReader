import React from 'react';
import { 
  Alert, 
  SafeAreaView, 
  Button, 
  StyleSheet,
  TextInput, 
  Text,Image, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
  import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

  class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
          <Text>Hello</Text>
      );
    }
  }
 export default function UserLogin() {

    // the user name and password is being updates as the user type
    // grab that data and make a request to the backend

    const [userName, setUserName] = React.useState('Peter');
    const [userPassword, setUserPassword] = React.useState('123');

    function Separator() {
        return <View style={styles.separator} />;
      }
    function createAccountHandler(){
        Alert.alert('Create Account Clicked')
    }
    
      function loginButtonHandler(){
        if(userName==='user' & userPassword==='user'){
            return(
                <Text>Hello</Text>
            )
        }else{
            console.log('Permission Denied')
        }    
      }

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
     <Separator/>
     {/* img view */}
      <View>
        <Image
          style={{width:250,height:250,marginLeft:80,marginBottom:20}}
          source={{uri:'https://s-media-cache-ak0.pinimg.com/originals/83/7c/03/837c039120864f252d1dd182a2688853.jpg'}}
        />
      </View>
      <Separator/>
      {/* text input */}
      <View>
        {/* <Text>
          Current UserName:{userName}
        </Text>
        <Text>
          Current UserPassword:{userPassword}
        </Text> */}
        <TextInput
            style={{ height: 40,marginHorizontal:50, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(val) => setUserName(val)}
            placeholder={"User Name"}

          />
          <TextInput
            style={{ height: 40,marginHorizontal:50, borderColor: 'gray', borderWidth: 1,marginTop:15 }}
            onChangeText={(val) => setUserPassword(val)}
            placeholder={"Password"}
          />
      </View>
      <View style={styles.horizontal}>
          <Button
            title="Create Account"
            onPress={() => createAccountHandler()}
            color={'#3b5998'}
          />
          <Button
          
            title="Login"
            onPress={() => loginButtonHandler()}
            color={'#3b5998'}
          />
        </View>
        <View style={{flexDirection:'row',justifyContent: 'space-around',marginTop:30, marginHorizontal:40}}>
        <FontAwesome name="facebook-official" size={42} color="#3b5998" onPress={() => console.log('facebook Clicked')}/>
        <MaterialCommunityIcons name="gmail" size={42} color="#4285F4" onPress={() => console.log('Gmail Clicked')}/>
        </View>
       

    </SafeAreaView>
    
    </TouchableWithoutFeedback>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    }, 
      horizontal: {
      
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding:30,
      marginHorizontal:40,
    },
    separator: {
      marginVertical: 20,
      borderBottomColor: '#737373',
    },
  });