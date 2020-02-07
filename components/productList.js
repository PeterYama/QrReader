import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Card, Button } from 'react-native-elements'
import styles from '../components/styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function productList(props) {
  
  const { navigation } = props;
  const [product, setproduct] = useState('');
  var data = navigation.getParam('data');
  
  const request = async () => {
    console.log("requested")
    console.log("Data is: " + data)
    const response = await fetch(data);
    const json = await response.json();
    setproduct(json);
  }

  console.log("product is null: "+ JSON.stringify(product))
  product === '' ? request() :  console.log("It's populated " + product)
  return product ? (
    <ScrollView><Card title={product.name} >
        <Image
              resizeMode="cover"
              source={{uri: product.image}}
              style={styles.image}
            />
              <View >
                <Text style={styles.title}>Model</Text>
                <Text style={styles.item}>{product.model}</Text>
              </View>
              <View >
                <Text style={styles.title}>Description</Text>
                <Text style={styles.item}>{product.description}</Text>
              </View>
              <View >
                <Text style={styles.title}>Height</Text>
                <Text style={styles.item}>{product.height}</Text>
              </View>
              <View >
                <Text style={styles.title}>Width</Text>
                <Text style={styles.item}>{product.width}</Text>
              </View>
              <View >
                <Text style={styles.title}>price</Text>
                <Text style={styles.item}>$ {product.price} AUD</Text>
              </View>
              <View >
                <Text style={styles.title}>rating</Text>
                <Text style={styles.item}>{product.rating} Stars</Text>
              </View>
              <Button
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Scan Another Product' onPress={()=>navigation.navigate('Camera View')}/>
      </Card>
    </ScrollView>
  ) : <View><Text>Error</Text></View>
}
