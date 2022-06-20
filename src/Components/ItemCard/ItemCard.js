import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ItemCard.style';

function ItemCard({shop_item}) {
  return (
    <View style={styles.card_container}>
      <Image source={{uri: shop_item.imgURL}} style={styles.card_image} />
      <Text style={styles.title}>{shop_item.title}</Text>
      <Text style={styles.price}>{shop_item.price}</Text>
      {!shop_item.inStock && <Text style={styles.stock_alert}>Stokta yok</Text>}
    </View>
  );
}

export default ItemCard;
