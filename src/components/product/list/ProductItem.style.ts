import styled, {css} from "styled-components";

export const Container = styled.li`
  all: unset;

  position: relative;
  width: 200px;

  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`

export const Stock = styled.div<{ isStock: boolean }>`
  position: absolute;
  bottom: 2px;
  left: 2px;

  ${({isStock}) => isStock ?
          css`
            background-color: white;
            color: black;
          ` :
          css`
            background-color: black;
            color: white;
          `}
`

export const ColorOptions = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  gap: 2px;
`

export const Color = styled.div<{ color: string }>`
  position: relative;

  width: 20px;
  height: 20px;
  background-color: ${({color}) => color};
  border-radius: 50%;
`;

export const Name = styled.span`
  font-size: 1.5rem;
`

export const Price = styled.span`
  color: grey;
`
