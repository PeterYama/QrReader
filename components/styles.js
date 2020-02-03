import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent:"center",
      justifyContent:"space-between"
    },
    logo:{
      fontFamily:"monospace",
      fontWeight:"bold",
      fontSize:50,
      color:"#f4f4f4",
      marginLeft:70,
      marginTop:100,
    },
    LoginContainer:{
      flex: 1,
      alignContent:"center",
      justifyContent:"space-between",
    },
    item: {
      fontSize: 14,
      borderBottomWidth:1,
      borderBottomColor:"#9e9fa1",
      paddingBottom:4
    },
    title:{
      fontWeight: 'bold'
    },
    scrollView:{
    },
    subtitleView: {
      paddingHorizontal: 5,
    },
    image: {
      width: 340,
      height: 340,
      resizeMode: 'center',
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey',
    },
    separator: {
      marginTop: 80,
    },
    horizontal: {
      flexDirection: 'column',
      padding:20,
      marginBottom:0,
      marginHorizontal:40,
    },
    smallSeparator:{
      padding:10,
    }
  })

  export default styles