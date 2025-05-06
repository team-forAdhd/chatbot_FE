import { NavigationContainer, createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import OnBoarding from '../ui/screens/OnBoarding';
import BottomTabNavigation from './BottomTabNavigation';

export type RootStackParamList = {
  OnBoarding: undefined;
  Tabs:       undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation(){
  return (
    
      <Stack.Navigator
        initialRouteName='OnBoarding'
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding}></Stack.Screen>
        <Stack.Screen name="Tabs" component={BottomTabNavigation}/>
      </Stack.Navigator>
    
  )
}