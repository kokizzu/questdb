import React, { ReactNode } from "react"
import styled, { css } from "styled-components"

import { fontSize } from "theme"
import type { Color, FontSize } from "types"
import { color } from "utils"

type FontStyle = "normal" | "italic"

export type TextProps = Readonly<{
  _style?: FontStyle
  className?: string
  color?: Color
  children?: ReactNode
  size?: FontSize
  weight?: number
}>

const defaultProps: Readonly<{
  _style: FontStyle
  color: Color
  size: FontSize
  weight: number
}> = {
  _style: "normal",
  color: "black",
  size: "md",
  weight: 400,
}

export const textCss = css<TextProps>`
  color: ${(props) => color(props.color ? props.color : defaultProps.color)};
  font-size: ${({ size }) => fontSize[size || defaultProps.size]};
  font-style: ${({ _style }) => _style};
  font-weight: ${({ weight }) => weight};
`

const Wrapper = styled.span<TextProps>`
  ${textCss};
`

export const Text = (props: TextProps) => <Wrapper {...props} />

Text.defaultProps = defaultProps