import React from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';

import Header from './Header';
import Products from './Product';
function ProductWrapper({navigation}) {
  const products = [
    {
      name: 'Iphone 14 pro max',
      color: 'black',
      price: 150000,
      image:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841897',
    },
    {
      name: 'Samsung s23 ultra',
      color: 'Violet',
      price: 100000,
      image:
        'https://d2xamzlzrdbdbn.cloudfront.net/products/754a1aa2-460a-4fd9-bb8e-1f2fb644add923021211.jpg',
    },
    {
      name: 'Iqoo z6 pro',
      color: 'black',
      price: 20000,
      image:
        'data:image/webp;base64,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',
    },
  ];
  return (
    <View>
      <Button title="Go To User" onPress={() => navigation.navigate('user')} />
      <Header />
      <ScrollView>
        {products.map(item => (
          <Products item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

export default ProductWrapper;
