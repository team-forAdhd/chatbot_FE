import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { SafeAreaView } from 'react-native'
import Report from '../ui/screens/Report';
import MedicineNoti from '../ui/screens/MedicineNoti';
import MedicineCalendar from '../ui/screens/MedicineCalendar';
import EmotionCalendar from '../ui/screens/EmotionCalendar';

export type ReportStackParamList = {
  ReportHome: undefined;
  MedicineNoti:       undefined;
  MedicineCalendar: undefined;
  EmotionCalendar: undefined
};

const Stack = createNativeStackNavigator<ReportStackParamList>();

const ReportStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='ReportHome'
        screenOptions={{
          headerShown:false
        }}
    >
      <Stack.Screen name="ReportHome" component={Report}></Stack.Screen>
      <Stack.Screen name="MedicineNoti" component={MedicineNoti}/>
      <Stack.Screen name="MedicineCalendar" component={MedicineCalendar}/>
      <Stack.Screen name="EmotionCalendar" component={EmotionCalendar}/>
    </Stack.Navigator>
  )
}

export default ReportStack