import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import EmergencyScreen from './screens/EmergencyScreen';
import SymptomCheckerScreen from './screens/SymptomCheckerScreen';
import MapScreen from './screens/MapScreen';
import ResponderScreen from './screens/ResponderScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
        <Stack.Screen name="SymptomChecker" component={SymptomCheckerScreen} options={{ title: 'Symptom Checker' }} />
        <Stack.Screen name="Responder" component={ResponderScreen} options={{ title: 'Nearby Responders' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Nearby Hospitals' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
