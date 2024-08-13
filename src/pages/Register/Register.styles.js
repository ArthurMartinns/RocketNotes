import styled from "styled-components";

export const Background_register = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;

    overflow: hidden;
`

export const Left = styled.div`
    height: 100vh;
    width: 60%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(assets/imgLogin.png);
`

export const Right = styled.div`
    height: 100vh;
    width: 40%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.6rem;
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
`

export const Top_h2 = styled.div`
    color: ${({theme}) => theme.COLORS.ORANGE};
    font-weight: bold;
    font-size: 4.8rem;
`

export const Top_p = styled.div`
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
`


export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 34rem;
`

export const Bottom_h2 = styled.div`
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: 4.8rem;
    font-weight: medium;
`

export const Inputs = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`

export const Back = styled.div`
    margin-top: 5rem;
`