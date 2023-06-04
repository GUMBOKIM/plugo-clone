import styled, {css} from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 600px;
  display: flex;
`;

export const LeftSection = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const ImageSelect = styled.ul`
  all: unset;
  
  width: 100%;
  overflow-x: scroll;
  
  display: flex;
  gap: 10px;
`

export const ImageSelectItem = styled.li`
  all: unset;
  
  width: 30%;
  flex-shrink: 0;
`

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Stock = styled.div<{ stock: boolean }>`
  ${({stock}) => stock ?
          css`
            background-color: white;
            color: black;
          ` :
          css`
            background-color: black;
            color: white;
          `}
`

export const Name = styled.span`
  font-size: 1.5rem;
`

export const Price = styled.span`
  color: grey;
`

export const Content = styled.span`
`