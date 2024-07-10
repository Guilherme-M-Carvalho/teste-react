import styled from "styled-components";

export const ButtonAdd = styled.button<{ blueHover?: boolean; green?: boolean; fitContent?: boolean; paddingInline?:boolean; maxWidth?: boolean }>`
    width: 100%;
    height: 40px;
    padding: 8px;
    gap: 12px;
    border-radius: 4px;
    background: ${props => props.theme.blue};
    border: 0px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    ${props => props.fitContent && `width: fit-content;`};
    ${props => props?.green && `background: ${props.theme.green}`};
    ${props => props?.paddingInline && `padding-inline: 32px`};
    ${props => props?.blueHover && !props.green ? `
        &:hover {
            background: ${props.theme.blueHover};
        }    
    `: null};

    span {
        font-size: 12px;
        font-weight: 400;
        line-height: 16.34px;
        text-align: center;
    }

    ${props => props.maxWidth && `
        @media (max-width: 576px) {
            width: 100%;
        }
    `}
`