import React from 'react'
import { View } from 'react-native'

type MarginVerticalProps = {
  margin:number;
}

const MarginVertical = ({margin}:MarginVerticalProps) => {
  return (
    <View style={{marginTop:margin}}></View>
  )
}

export default MarginVertical