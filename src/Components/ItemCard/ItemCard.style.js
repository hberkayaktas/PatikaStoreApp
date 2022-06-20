import { Dimensions,StyleSheet} from 'react-native';

export default StyleSheet.create({
  card_container:{
    backgroundColor:'#eceff1',
    padding:10,
    width: Dimensions.get('window').width /2 -20,
    flex:1,
    borderRadius:10,
    margin:6,
  },
  card_image:{
    height: 200,
    borderRadius:10,
    resizeMode:'center',
  },
  title:{
    color:'black',
    fontWeight:'bold',
    fontSize:16,
    marginTop:3,
  },
  price:{
    fontWeight:'bold',
    fontSize:15,
  },
  stock_alert:{
    color:'red',
    fontWeight:'bold',
    textTransform:'uppercase',
  }
});
