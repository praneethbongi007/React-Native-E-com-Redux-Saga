import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddtoCart, RemoveFromCart} from './Redux/Action';
function Products(props) {
  const [isAdded, setIsAdded] = useState(false);
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const handleAddtoCart = item => {
    dispatch(AddtoCart(item));
  };
  const handleRemoveFromCart = item => {
    dispatch(RemoveFromCart(item.name));
  };
  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  });
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        padding: 10,
        padding: 10,
        marginBottom: 50,
      }}>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
      {isAdded ? (
        <Button
          title="Remove to Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddtoCart(item)} />
      )}
    </View>
  );
}

export default Products;
