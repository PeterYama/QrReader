import React , { useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default function productList(props) {

    const { navigation } = props;
    const [products,setProducts] = useState('');
    var data = navigation.getParam('data');
    populate(data);

    const styles = StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: '#DAF2FD',
        paddingTop:40,
        paddingHorizontal: 20
      },
      item:{
        marginTop:24,
        padding:30,
        backgroundColor:'#CCD5FC',
        fontSize:24,
        marginHorizontal:10,
        marginTop:24
      }
    })
    
    return (
      <View style={styles.container}>
            <ScrollView>
              { products === '' ? console.log('waiting') :  products.map((item) => {
                return (
                    <View style={styles.item}>
                      <Text>{item.title}</Text>
                      <Text>{item.type}</Text>
                      <Text>{item.description}</Text>
                      <Text>$ {item.price} AUD</Text>
                    </View>
                )
              }) }
          </ScrollView>
      </View>
    );

    async function populate(data){
      await fetch(data).then( res =>  res.json())
        .then(
          (result) => {
            // console.log("result: "+ JSON.stringify(result))
            setProducts(result);
          },
          (error) => {
            console.log(`Error while calling the API : ${error}`)
          }
    );  
    }

    
    
}
