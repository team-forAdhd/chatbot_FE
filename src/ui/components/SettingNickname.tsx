import styled from '@emotion/native'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { colors } from '../styles/color';
import MarginVertical from './MarginVertical';
import Button from './Button';
import { size } from '../styles/size';

type SettingNicknameProps = {
  setIndex:(index: number) => void;
}

const SettingNickname = ({setIndex}:SettingNicknameProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [nickname, setNickname] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleNickname = () => {
    setIndex(8)
  }

  useEffect(() => {
    if(nickname.length > 0)setIsValid(true)
  }, [nickname])
  

  return (
    <TouchableWithoutFeedback onPress={() => {setIsFocused(false);Keyboard.dismiss()}}>
      <Body>
        <TitleText>{"저는 여러분이 설정한\n닉네임으로만 대화할 거예요\n원하는 닉네임으로 저와 자유롭게\n소통해주세요!"}</TitleText>
        <MarginVertical margin={60}/>
        <Input
          placeholder='닉네임을 입력해주세요'
          value={nickname}
          onChange={(e) => setNickname(e.nativeEvent.text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          isFocused={isFocused}
          isError={!isValid}/>
        <MarginVertical margin={10}/>
        <View style={{width:"100%", justifyContent:'center',alignItems:'center'}}> 
          <Button text={"입력완료"} check={nickname.length > 0} handleButton={() => handleNickname()}/>
        </View>
      </Body>
    </TouchableWithoutFeedback>
  )
}

export default SettingNickname

const Body = styled.View`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
`

const TitleText = styled.Text`
  font-size: 26px;
  color: ${colors.fontMain};
  text-align: center;
  font-weight:500;
`

const Input = styled.TextInput<{isFocused:boolean; isError: boolean}>`
  width:90%;
  height:50px;
  background-color:${(props) => (props.isFocused ? "#fff" :colors.unSelected)};
  border-radius:10px;
  padding:10px 20px;
  border: 
    ${(props) => (props.isError ? '2px solid red' : props.isFocused ? ' 2px solid #FFA05D' : 'transparent')};
`

