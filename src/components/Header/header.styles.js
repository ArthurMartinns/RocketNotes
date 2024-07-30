import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    width: 100%;
    height: 105px;

    padding: 0 80px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};


    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.2rem;

    > img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        align-items: start;

        span {
            color: ${({theme}) => theme.COLORS.WHITE};
            font-size: 1.6rem;
        }

        strong {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 1.8rem;
        }
    }
`

export const Button = styled.div`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`