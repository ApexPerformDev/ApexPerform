import React, { useEffect } from 'react';
import * as ScreenCapture from 'expo-screen-capture';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/screens/login/login.jsx";
import SingUp from "./src/screens/sing-up/sing-up.jsx";
import Home from "./src/screens/home/home.jsx";
import CalendarAgenda from "./src/screens/calendar-agenda/calendar-agenda.jsx";
import Profile from "./src/screens/profile/profile.jsx";
import Main from "./src/screens/main/main.jsx"
import Cheking from "./src/screens/cheking/cheking.jsx"
import CadastroSucessoScreen from './src/screens/CadastroSucessoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const allowScreen = async () => {
      try {
        await ScreenCapture.allowScreenCaptureAsync();
        console.log('Permitido captura de tela para este app.');
      } catch (error) {
        console.error('Erro ao permitir captura de tela:', error);
      }
    };
    allowScreen();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cadastro"
        screenOptions={{
          headerShown: false
        }}
      >
        {}
        <Stack.Screen name="Cadastro" component={SingUp} />
        <Stack.Screen name="CadastroSucesso" component={CadastroSucessoScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Agenda" component={CalendarAgenda} />
        <Stack.Screen name="Perfil" component={Profile} />
        <Stack.Screen name="Cheking" component={Cheking} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}