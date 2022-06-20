import React from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './Components/Header';
import ItemCard from './Components/ItemCard';
import shop_items from './store_item.json';
const App: () => Node = () => {
  const renderItem = ({item}) => <ItemCard shop_item={item} />;
  //console.log(shop_items);
  return (
    <SafeAreaView>
      <Header />
      <FlatList
        data={shop_items}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
        style={styles.shop_list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shop_list: {
    // padding:12,
    paddingLeft: 6,
    paddingRight: 6,
    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height / 1.25,
  
  },
});

export default App;
