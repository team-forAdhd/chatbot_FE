import React from 'react';
import type {PropsWithChildren} from 'react';
import OnBoarding from './src/ui/screens/OnBoarding';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import 'react-native-gesture-handler';




export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
    
  );
}

