import styled, {css} from "styled-components";

export const Button = styled.button<{ size: "LARGE" | "SMALL" }>`
  ${({size}) => size === "LARGE" ?
          css`
            width: 100%;
          `
          :
          css`
            width: 50px;
            margin-left: auto;
          `
  }
`