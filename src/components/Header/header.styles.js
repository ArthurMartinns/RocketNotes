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