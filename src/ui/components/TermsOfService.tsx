import styled from '@emotion/native'
import React, { Dispatch, SetStateAction } from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { colors } from '../styles/color'
import { size } from '../styles/size'
import { ScrollView } from 'react-native'
import MarginVertical from './MarginVertical'
import Button from './Button'

type TermsOfServiceProps = {
  setIndex:(index: number) => void;
}

const TermsOfService = ({setIndex}:TermsOfServiceProps) => {
  return (
    <Body>
      <HeaderText>앱 이용약관</HeaderText>
      <MarginVertical margin={10}/>
      <ContentsArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>

          </Text>
        </ScrollView>
      </ContentsArea>
      <MarginVertical margin={10}/>
      <Button text={"모두 동의합니다"} check={true} handleButton={() => setIndex(15)}/>
    </Body>
  )
}

export default TermsOfService


const Body = styled.View`
  width: ${() => `${size.width*.9}px`};
  height: ${() => `${size.height}px`};
  display:flex;
  justify-content:center;
  align-items:center;
`

const HeaderText = styled.Text`
  color:${colors.fontMain};
  font-size:24px;
  font-weight:600;
`

const ContentsArea = styled.View`
  background-color:${colors.chatOrange};
  width:100%;
  height:70%;
  border-radius:20px;
`
const Text = styled.Text`
  color:#000;
  font-size:12px;

`
