import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};

  margin-top: 8px;
  border-radius: 10px;

  > input {
  height: 56px;
  width: 100%;

  padding: 12px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;
  border: 0;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300} 
  }
}

  > svg {
    margin-left: 16px;
  }
`