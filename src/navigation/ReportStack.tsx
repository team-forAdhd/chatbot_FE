import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { SafeAreaView } from 'react-native'
import Report from '../ui/screens/Report';
import MedicineNoti from '../ui/screens/MedicineNoti';

export type ReportStackParamList = {
  ReportHome: undefined;
  MedicineNoti:       undefined;
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

    </Stack.Navigator>
  )
}

export default ReportStack