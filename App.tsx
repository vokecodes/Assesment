import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './screens/Auth';
import Home from './screens/Home';
import Item from './screens/Item';
import {RootStackParamList} from './utils/Interfaces';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
