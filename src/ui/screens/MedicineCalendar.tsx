import styled from '@emotion/native'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { colors } from '../styles/color'
import { size } from '../styles/size';
import Calendar from '../components/Calendar';
import dayjs from 'dayjs';
import MarginVertical from '../components/MarginVertical';
import { useNavigation } from '@react-navigation/native';


const MedicineCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor:colors.bgColor}}>
      <Body>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <HeaderIcon onPress={() => navigation.goBack()}/>
          <HeaderText>한달 약 캘린더</HeaderText>
          <HeaderIcon/>
        </Header>
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} isNext={false}/>
        <MarginVertical margin={20}/>
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} isNext={true}/>
        <MarginVertical margin={200}/>
        </ScrollView>
      </Body>
    </SafeAreaView>
  )
}

export default MedicineCalendar


const Body = styled.View`
    width: ${() => `${size.width}px`};
    height: ${() => `${size.height}px`};
    background-color:${colors.bgColor};
    padding: 0 30px;  
`

const Header = styled.View`
  height:50px;
  width:100%;
  gap:5px;
  display:flex;
  flex-direction:row;
  align-items:center;
`

const HeaderIcon = styled.TouchableOpacity`
  background-color:red;
  width:30px;
  height:100%;
`

const HeaderText = styled.Text`
  color:${colors.fontMain};
  font-size:20px;
  flex-grow:1;
`


