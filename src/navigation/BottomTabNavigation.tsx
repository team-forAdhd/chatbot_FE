import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Chat from '../ui/screens/Chat';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    
      <Tab.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Tab.Screen name="MORI" component={Chat}></Tab.Screen>
        <Tab.Screen name="REPORT" component={Chat}></Tab.Screen>
        <Tab.Screen name="MY" component={Chat}></Tab.Screen>
      </Tab.Navigator>
    
  )
}

export default BottomTabNavigation