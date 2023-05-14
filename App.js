import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Task from './src/pages/Task/';
import NewTask from './src/pages/NewTask/';
import Details from './src/pages/Details/';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ManuVei"
        screenOptions={{
          headerTintColor: '#0047b3',
        }}
      >
        <Stack.Screen name="ManuVei" component={Task} />
        <Stack.Screen name="Registrar" component={NewTask} />
        <Stack.Screen name="Detalhes" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
