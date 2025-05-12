import styled from '@emotion/native'
import React from 'react'
import { colors } from '../styles/color'

type CalendarTagProps = {
  text:string
}

const CalendarTagEl = ({text}:CalendarTagProps) => {
  return (
    <Body>
      <Text>{text}</Text>
    </Body>
  )
}

export default CalendarTagEl

const Body = styled.View`
  width:100%;
  height:20px;
  background-color:${colors.pointColor};
  border-radius:50px;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Text = styled.Text`
  font-size:15px;
  font-weight:500;
  color:${colors.fontMain};
`