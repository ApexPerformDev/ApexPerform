import React, { useEffect } from 'react'; 
import * as ScreenCapture from 'expo-screen-capture'; 
import Login from "./src/screens/login/login.jsx";
import SingUp from "./src/screens/sing-up/sing-up.jsx";
import Home from "./src/screens/home/home.jsx";
import CalendarAgenda from "./src/screens/calendar-agenda/calendar-agenda.jsx";
import Profile from "./src/screens/profile/profile.jsx";
import Main from "./src/screens/main/main.jsx"
import Cheking from "./src/screens/cheking/cheking.jsx"

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
    <>
      <SingUp />
    </>
  );
}