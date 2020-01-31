import React from 'react';
import { Alert, ActivityIndicator , ScrollView, Button, StyleSheet, TextInput, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Card, ListItem, Image } from 'react-native-elements'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

 export default function UserLogin( { navigation } ) {


    return (
      <Card title="CARD WITH DIVIDER">
      <View >
          <Image
            resizeMode="cover"
            source={require('../pictures/GetRequest.png')}
            style={styles.image}
            class="center"
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View >
            <ListItem
              key={"i"}
              roundAvatar
              title={"l.name"}
              subtitle={"repellendus nesciunt inventore aspernatur. Dignissimos sunt perferendis, eos accusantium"}
              bottomDivider
            />
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis odit atque repellendus nesciunt inventore aspernatur. Dignissimos sunt perferendis, eos accusantium unde nostrum incidunt recusandae commodi dolore fugit tenetur! Repudiandae, incidunt.</Text>

        </View>
      </Card>
    )
  }

  styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    image: {
      height: 200,
      width: 200,
      justifyContent:"center",
      alignContent:"center",
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    },
  })
  