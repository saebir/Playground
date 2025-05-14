import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ButtonsScreen from './screens/ButtonsScreen';
import InputsScreen from './screens/InputsScreen';
import PasswordScreen from './screens/PasswordScreen';
import OthersScreen from './screens/OthersScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Forside" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Knapper" component={ButtonsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Inputfelter" component={InputsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Adgangskode" component={PasswordScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Andet" component={OthersScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
