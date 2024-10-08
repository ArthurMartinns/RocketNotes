import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  grid-area: brand;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  border-right: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.ORANGE}
  }
`
export const Menu = styled.ul`
  grid-area: menu;

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 64px;


    > li:first-child {
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > li {
        list-style: none;
        font-size: 16px;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.GRAY_100};
     }
  }
`
export const Search = styled.div`
  grid-area: search;
  border-left: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  padding: 64px 64px 0;
`
export const Content = styled.div`
  grid-area: content;
  border-left: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  padding: 0 64px;
`
export const NewNote = styled.button`
  grid-area: newnote;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
