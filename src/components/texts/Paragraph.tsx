import React from 'react'
import BaseText, { BaseTextProps } from './BaseText'

export default function Paragraph(props: BaseTextProps) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: 16,
        },
        props.style,
      ]}
    />
  )
}
