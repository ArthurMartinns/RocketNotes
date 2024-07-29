import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Left = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
`

export const Left_h1 = styled.div`
    font-weight: bold;
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.ORANGE};
`
export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
`
export const Bottom_h2 = styled.div`
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-weight: medium;
    margin-bottom: 48px;
`

export const Left_p = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const Right = styled.div`
    width: 100%;
`