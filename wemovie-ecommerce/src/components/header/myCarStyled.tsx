import styled from "styled-components";

export const MyCar = styled.button`

    display: flex;
    background: transparent;
    outline: none;
    box-shadow: none;
    border: 0;
    gap: 16px;
    color: ${props => props.theme.gray};
    text-align: right;
    cursor: pointer;
    align-items: center;
    
    & > div {
        display: flex;
        flex-direction: column;
    }

    & span{
        color: ${props => props.theme.white};
    }

    @media (max-width: 576px) {
        gap: 8px;

        & span {
            display: none !important;
        }
    }

`