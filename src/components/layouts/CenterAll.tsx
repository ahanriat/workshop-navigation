import React, { ReactElement, ReactNode } from 'react'
import { View, ViewProps } from 'react-native'

export default function CenterAll(props: CenterAllProps) {
  return (
    <View
      {...props}
      style={[
        { flex: 1, justifyContent: 'center', alignItems: 'center' },
        props.style,
      ]}
    />
  )
}

interface CenterAllProps extends ViewProps {
  children?: ReactNode
}
