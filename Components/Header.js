import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
function Header() {
  const [cartitems, setCartItems] = useState(0);
  const cartData = useSelector(state => state.reducer);
  console.warn(cartData);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: '#34495e',
          color: 'white',
        }}>
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'right',
              padding: 10,
              backgroundColor: 'blue',
              color: 'white',
              borderRadius: 20, // Add rounded corners to the background
              fontWeight: 'bold', // Make the font weight bold
              elevation: 3, // Add a shadow effect to the text
              shadowOffset: {width: 1, height: 1}, // Set the shadow offset
              shadowColor: 'black', // Set the shadow color
              shadowOpacity: 0.5, // Set the shadow opacity
            }}>
            {cartitems}
          </Text>
        </View>
      </Text>
    </View>
  );
}

export default Header;
