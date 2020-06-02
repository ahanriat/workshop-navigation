import React from "react";
import BaseText, { BaseTextProps } from "./BaseText";

export function H1(props: BaseTextProps) {
  return (
    <BaseText
      {...props}
      style={[
        {
          letterSpacing: 4,
          textTransform: "uppercase",
          fontSize: 24,
          lineHeight: 32,
          marginVertical: 24,
          textAlign: "center",
          alignSelf: "center",
        },
        props.style,
      ]}
    />
  );
}
export function H2(props: BaseTextProps) {
  return (
    <BaseText
      {...props}
      style={[
        {
          letterSpacing: 2,
          textTransform: "uppercase",
          fontSize: 16,
          lineHeight: 24,
        },
        props.style,
      ]}
    />
  );
}
export function H3(props: BaseTextProps) {
  return (
    <BaseText
      {...props}
      style={[
        {
          letterSpacing: 2,
          textTransform: "uppercase",
          fontSize: 12,
          lineHeight: 18,
        },
        props.style,
      ]}
    />
  );
}
