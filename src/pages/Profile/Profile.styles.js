import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 144px 1fr;
    grid-template-areas: 
        "cabecalho"
        "main";
`;


export const Header = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    width: 100%;
    grid-area: cabecalho;
`

export const Content = styled.div`
    width: 100%;
    height: 144px;
    display: flex;
    align-items: center;
`

export const Main = styled.div`
    width: 100%;
    grid-area: main;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Itens = styled.div`
    width: 100%;
    margin-left: 144px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;   
    position: relative;
`

export const Image = styled.div`
    width: 100%;
    top: 35px;
    border-radius: 93px;
    position: absolute;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        width: 186px;
        height: 186px;
        border-radius: 93px;
    }
`

export const Itens_Main = styled.div`
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`