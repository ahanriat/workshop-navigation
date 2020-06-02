import React, { ReactElement, ReactNode } from 'react'
import { View, ViewProps } from 'react-native'

export default function FlexView(props: CenterAllProps) {
  return <View {...props} style={[{ flex: 1 }, props.style]} />
}

interface CenterAllProps extends ViewProps {
  children?: ReactNode
}
