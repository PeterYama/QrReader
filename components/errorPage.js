import * as React from 'react';
import { Text, View } from 'react-native';
import logo from '../assets/gifs/giphy.webp'

export default class errorPage extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };



  render() {
    return (
      <View>
        <Text>Error</Text>
        <img src={logo} alt="loading..." />
      </View>
    );
  }


}
