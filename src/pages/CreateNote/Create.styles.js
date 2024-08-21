import styled from "styled-components"

export const Content = styled.div`
    width: 100%;
`

export const Back = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`

export const SubHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #fff; 
    width: 100%;


    > h2 {
        font-size: 28px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > p {
        font-size: 12px;
        color: ${({theme}) => theme.COLORS.GRAY};
    }
`

export const Mid = styled.div`
    width: 100%;
    height: 100vh;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    border: 1px solid ${({theme}) => theme.COLORS.WHITE};
    max-width: 45rem;
`

export const SubMid = styled.div`
    width: 100%;
`