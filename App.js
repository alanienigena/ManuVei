import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Task from './src/pages/Exib';
import NewTask from './src/pages/Register';
import Details from './src/pages/Details/';

const Stack = createStackNavigator();

/**
 * Componente principal que configura a navegação e as telas do aplicativo de agendamento de manutenções.
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ManuVei"
        screenOptions={{
          headerTintColor: '#0047b3',
        }}
      >
        {/* Tela principal - exibe a lista de tarefas */}
        <Stack.Screen name="ManuVei" component={Task} />

        {/* Tela para adicionar uma nova tarefa */}
        <Stack.Screen name="Registrar" component={NewTask} />

        {/* Tela de detalhes de uma tarefa */}
        <Stack.Screen name="Detalhes" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
