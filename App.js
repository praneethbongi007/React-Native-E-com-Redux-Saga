import React from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';
import ProductWrapper from './Components/ProductWrapper';
import UserList from './Components/UserList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="home" component={ProductWrapper} />
        <stack.Screen name="user" component={UserList} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
