import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import React from 'react';
import { useFonts } from 'expo-font';

// App.js is already setup by wrapping NavigationContainer around Root Navigator
export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  return (
    <NavigationContainer>
      <RootNavigator /> 
    </NavigationContainer>
  );
}
