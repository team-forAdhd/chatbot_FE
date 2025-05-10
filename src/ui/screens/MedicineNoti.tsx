import styled from '@emotion/native'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { colors } from '../styles/color'
import { size } from '../styles/size';
import MarginVertical from '../components/MarginVertical';


const MedicineNoti = () => {
  const notiArray = [["아침","아침 약 먹기","오전","9:00"],["점심", "점심 약 먹기","오후","13:00"],["저녁", "저녁 약 먹기","오후","19:00"], ["자기 전", "자기 전 약 먹기","오후","23:00"]]
  const [isSetting,setIsSetting] = useState(false);
  const [selectedList,setSelectedList] = useState(new Array(notiArray.length).fill(false));

  return (
    <SafeAreaView style={{backgroundColor:colors.bgColor}}>
      <Body>
        <Header>
          <HeaderIcon>

          </HeaderIcon>
          <NotiText style={{color:colors.fontMain, fontSize:20,flexGrow:1}}>약 복용 알림</NotiText>
          <HeaderIcon onPress={() => setIsSetting(prev => !prev)}>

          </HeaderIcon>
        </Header>
        <MarginVertical margin={13}/>
        <NotiArea>
          <ScrollView showsVerticalScrollIndicator={false}>
            {notiArray.map((el,index) => {
              return(
                <View key={index} style={{flexDirection:'row', gap:14, alignItems:'center'}}>
                {isSetting ?
                  <SelectButton
                    onPress={() => setSelectedList(prev => ([prev.slice(0,index),true,prev.slice(index+1)]))}
                    style={{borderColor: selectedList[index] ? colors.pointColor : colors.fontMain}}
                  /> : <></>}
                <NotiEl >
                  <View style={{width:isSetting ? "50%" :"55%", justifyContent:'center', gap:3}}>
                    <NotiText>{`알림 유형: ${el[0]} 약 복용 시간`}</NotiText>
                    <NotiTitle>{el[1]}</NotiTitle>
                  </View>
                  <TimeArea>
                    <NotiText style={{fontSize:16}}>{el[2]}</NotiText>
                    <TimeText>{el[3]}</TimeText>
                  </TimeArea>
                </NotiEl>
                </View>
              )
            })}
            <AddNotiButton>
              <NotiText style={{fontSize:16}}>+ 약 복용 알림 추가하기</NotiText>
            </AddNotiButton>
          </ScrollView>
        </NotiArea>
      {isSetting ? <DeleteButton><NotiTitle style={{color:"#fff",fontSize:20, fontWeight:500}}>알림 일괄 삭제하기</NotiTitle></DeleteButton> : <></>}
      </Body>
    </SafeAreaView>
  )
}

export default MedicineNoti

const Body = styled.View`
    width: ${() => `${size.width}px`};
    height: ${() => `${size.height}px`};
    background-color:${colors.bgColor};
    padding: 0 30px;
`

const Header = styled.View`
  width:100%;
  height:50px;
  display:flex;
  flex-direction:row;
  align-items:center;
`

const HeaderIcon = styled.TouchableOpacity`
  width:50px;
  height:100%;
  background-color:red;
  display:flex;
  justify-content:center;
  align-items:center;
`

const NotiArea = styled.View`
  width:100%;
  display:flex;
  gap:8px;
`

const NotiEl = styled.View`
  display:flex;
  flex-direction:row;
  background-color:#fff;
  padding:8px;
  margin-bottom:10px;
  border-radius:10px;
`

const NotiText = styled.Text`
  font-size:14px;
  
`

const NotiTitle = styled.Text`
  font-size:20px;

`

const TimeArea = styled.View`
  width:45%;
  height:55px;
  background-color:${colors.bgColor};
  border-radius:10px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  gap:3px;
`

const TimeText = styled.Text`
  font-size:36px;
  color:${colors.pointColor};
`

const AddNotiButton = styled.TouchableOpacity`
  width:100%;
  height:45px;
  background-color:#fff;
  border-radius:10px;
  padding: 8px 20px;
  display:flex;
  justify-content:center;
`

const SelectButton = styled.TouchableOpacity`
  width:24px;
  height:24px;
  border:1px solid ${colors.fontMain};
  border-radius:50%;
`

const DeleteButton = styled.TouchableOpacity`
  width: ${() => `${size.width}px`};
  height:120px;
  background-color:${colors.pointColor};
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  bottom:150px;
  z-index:3;
`