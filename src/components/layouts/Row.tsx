import React, { ReactNode } from 'react'
import { View, ViewProps } from 'react-native'

export default function Row(props: ViewProps & { children: ReactNode }) {
  return <View {...props} style={[props.style, { flexDirection: 'row' }]} />
}
