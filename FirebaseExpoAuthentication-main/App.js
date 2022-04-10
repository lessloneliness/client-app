import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import { MainScreen } from './screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator defaultScreenOptions={'Home'}>
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen
          options={{ headerShown: true }}
          name='Less loneless'
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name='Register Screen'
          component={RegisterScreen}
        />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
