import styled, {css} from "styled-components";

export const Button = styled.button<{ size: "LARGE" | "SMALL" }>`
  ${({size}) => size ?
          css`width: 100%;`
          : css`width: 100px`}
`