import React, {useState} from 'react';
import { Text, View, Alert } from 'react-native';

export default class productList extends React.Component {

    constructor(props){
        super(props)
        this.test()
        // const [products,setProducts] = useState('');
        // this.setProducts = this.setProducts.bind(this);
    }

    test(){
        Alert.alert('test')
    }

    populateState(data) {
        fetch(data).then(res => res.json())
        .then(
          (result) => {
            console.log("result: "+ JSON.stringify(result))

          },
          (error) => {
            console.log(`Error while calling the API : ${error}`)
          }
        );
      }
  
//   state = {
//     hasCameraPermission: null,
//     scanned: false,
//   }; 

  render() {
    // const { navigation } = this.props;

    return (
      <View>
       <Text>Product List</Text>
       {/* <Text>data = {JSON.stringify(navigation.getParam('data'))}</Text>
       <Text>type = {JSON.stringify(navigation.getParam('type'))}</Text>
       <Text>type = {this.userState.products}</Text> */}
      </View>
      
    );
  }

  
}
