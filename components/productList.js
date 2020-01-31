import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Mongo from '../controllers/mongo_controller';
import styles from '../components/styles';

export default function productList(props) {
  const { navigation } = props;
  const [product, setproduct] = useState('');
  var data = navigation.getParam('data');
  
  const request = async () => {
    console.log("requested")
    const response = await fetch(data);
    const json = await response.json();
    setproduct(json);
  }

  console.log("product is null: "+ product)
  product === '' ? request() :  console.log("It's populated " + product)
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>{product.name}</Text>
          <Text>{product.model}</Text>
          <Text>{product.description}</Text>
        </ScrollView>
      </View>
    );
   
}


// {product === '' ? console.log('waiting') : product.map((item) => {
//   return (
//     <View style={styles.item}>
//       <Text>{item.title}</Text>
//       <Text>{item.type}</Text>
//       <Text>{item.description}</Text>
//       <Text>$ {item.price} AUD</Text>
//     </View>
//   )
// })}