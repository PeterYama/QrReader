import * as React from 'react';
import { Text, View } from 'react-native';

export default class errorPage extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  

  render() {
    return (
      <View>
       <Text>Error</Text>
      </View>
    );
  }

  
}
