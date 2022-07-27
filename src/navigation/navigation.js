import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import EditScreen from '../Screens/EditScreen';
import AddPage from '../Screens/AddScreen';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddPage"
        component={AddPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
