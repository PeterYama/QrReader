import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function productList(props) {
    const { navigation } = props;
    const [products,setProducts] = useState('');
    var data = navigation.getParam('data');
    
    function populate(data){
        fetch(data).then(res => res.json())
        .then(
          (result) => {
            // console.log("result: "+ JSON.stringify(result))
            setProducts(result);
            console.log(products);
          },
          (error) => {
            console.log(`Error while calling the API : ${error}`)
          }
    );  
    }
    
    populate(data);
    
    return (
      <View>
       <Text>Product List</Text>
       <Text>data = {JSON.stringify(navigation.getParam('data'))}</Text>
       <Text>type = {JSON.stringify(navigation.getParam('type'))}</Text>
       <Text>{JSON.stringify(products)}</Text>
      </View>
      
    );
}
