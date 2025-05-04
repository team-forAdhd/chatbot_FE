import styled from '@emotion/native'
import React from 'react'
import { colors } from '../styles/color'

type ButtonProps = {
  text:string,
  check: boolean,
  handleButton: () => void,
}

const Button = ({text, check, handleButton}:ButtonProps) => {
  return (
    <ButtonBody check={check} onPress={check ? handleButton : () => {}}>
      <ButtonText>{text}</ButtonText>
    </ButtonBody>
  )
}

export default Button

const ButtonBody = styled.TouchableOpacity<{check:boolean}>`
  width:90%;
  height:50px;
  border-radius:10px;
  background-color:${(props) => (props.check ? colors.pointColor : colors.unSelected)};
  display:flex;
  justify-content:center;
  align-items:center;
`

const ButtonText = styled.Text`
  font-size:20px;
  color:#fff;

`