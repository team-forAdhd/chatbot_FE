import styled from '@emotion/native'
import React from 'react'
import { Image, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { size } from '../styles/size';
import { colors } from '../styles/color';
import headerIcon from '../../assets/bottomTapIcon2.png';
import MarginVertical from '../components/MarginVertical';
import { useNavigation } from '@react-navigation/native';
import { ReportStackParamList } from '../../navigation/ReportStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ReportNavProp = NativeStackNavigationProp<ReportStackParamList, 'ReportHome'>;

const Report = () => {
  const categoryArr = ["약 복용 알림", "한달 약 캘린더", "한달 감정 리포트"]
  const navigation = useNavigation<ReportNavProp>();

  return (
    <SafeAreaView style={{backgroundColor:colors.bgColor}}>
      <Body>
        <Header>
          <Image source={headerIcon} style={{width:24, height:24, resizeMode:'contain'}}/>
          <Text>리포트</Text>
        </Header>
        <MarginVertical margin={15}/>
        <CategoryArea>
          {categoryArr.map((el,index) => {
            return(
              <CategoryEl key={index}>
                <CategoryIcon>
                  <Image/>
                </CategoryIcon>
                <Text style={{flexGrow:1}}>{el}</Text>
                <TouchableOpacity style={{width:30,height:"100%", alignItems:'center', justifyContent:'center'}}
                  onPress={() => navigation.navigate(index === 0 ? "MedicineNoti" : index === 1 ? "MedicineCalendar" : "EmotionCalendar")}
                >
                  <Icon name="right" size={16} color="#000"/>
                </TouchableOpacity>
              </CategoryEl>
            )
          })}
        </CategoryArea>
        
      </Body>
    </SafeAreaView>
  )
}

export default Report

const Body = styled.View`
  width: ${() => `${size.width}px`};
  height: ${() => `${size.height}px`};
  background-color:${colors.bgColor};
  padding: 0 30px;
`

const Header = styled.View`
  width: ${() => `${size.width}px`};
  height:50px;
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:5px;

`

const Text = styled.Text`
  font-size:20px;
  color:${colors.fontMain};
`

const CategoryArea = styled.View`
  width:100%;
  background-color:#fff;
  padding: 8px;
  border-radius:8px;
`

const CategoryEl = styled.View`
  width:100%;
  height:50px;
  background-color:#fff;
  padding:10px;
  display:flex;
  flex-direction:row;
  align-items:center;
  gap: 8px;
`

const CategoryIcon = styled.View`
  width:24px;
  height:24px;
  border-radius:5px;
  background-color:${colors.chatOrange};
`

