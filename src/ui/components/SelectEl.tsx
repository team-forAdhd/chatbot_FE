import styled from '@emotion/native'
import React from 'react'
import { colors } from '../styles/color';


type SelectElProps = {
  text:String,
  isSelected:boolean
}

const SelectEl = ({text, isSelected}:SelectElProps) => {
  return (
    <Body isSelected={isSelected}>
      <Text isSelected={isSelected}>{text}</Text>
    </Body>
  )
}

export default SelectEl

const Body = styled.TouchableOpacity<{isSelected:boolean}>`
  background-color:#fff;
  border-radius:20px;
  shadow-color: #000;
  shadow-offset: 0px 0px;     
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  padding:10px 16px;
  display:flex;
  justify-content:center;
  align-items:center;
  border: ${(props) => (props.isSelected ? `1.5px solid ${colors.pointColor}` : "none")}
`

const Text = styled.Text<{isSelected:boolean}>`
  font-size:16px;
  color:${(props) => (props.isSelected ? colors.pointColor : "#000")};
`