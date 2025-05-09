import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Chat from '../ui/screens/Chat';
import { colors } from '../ui/styles/color';
import { Image, View } from 'react-native';
import Icon1 from '../assets/bottomTabIcon1.png';
import Icon1Focus from '../assets/bottomTabIcon1Focus.png';
import Icon2 from '../assets/bottomTapIcon2.png';
import Icon2Focus from '../assets/bottomTabIcon2Focus.png';
import Icon3 from '../assets/bottomTabIcon3.png';
import Icon3Focus from '../assets/bottomTabIcon3Focus.png';
import MarginVertical from '../ui/components/MarginVertical';
import Report from '../ui/screens/Report';
import ReportStack from './ReportStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown:false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "MORI") {
              return <View>
              <Image source={focused ? Icon1Focus : Icon1  } style={{width:40, height:40}}/>
              <MarginVertical margin={10}/>
            </View>;
            } else if (route.name === "REPORT") {
              return <View><Image source={focused ? Icon2Focus:Icon2 } style={{width:35, height:35, resizeMode:'contain'}}/><MarginVertical margin={10}/></View>;
            } else if (route.name === "MY"){
              return <View><Image source={focused ? Icon3Focus: Icon3  } style={{width:40, height:40}}/><MarginVertical margin={10}/></View>
            }
            return null;
          },
          tabBarItemStyle: {
            height: 100,
          },      
          safeAreaInsets: {
            bottom: 0, // 👈 이거 없으면 iPhone에서 짤림
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            textTransform: 'none',   // 모두 대문자(default) 해제
            paddingBottom: 4,
          },
          tabBarActiveTintColor: colors.pointColor,
          tabBarInactiveTintColor: colors.fontMain,
          tabBarStyle: {
            backgroundColor: '#FFF',
            height: 100,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            borderTopWidth: 0,
            paddingTop:20
          },
        })}
        
      >
        <Tab.Screen name="MORI" component={Chat}></Tab.Screen>
        <Tab.Screen name="REPORT" component={ReportStack}></Tab.Screen>
        <Tab.Screen name="MY" component={Chat}></Tab.Screen>
      </Tab.Navigator>
    
  )
}

export default BottomTabNavigation