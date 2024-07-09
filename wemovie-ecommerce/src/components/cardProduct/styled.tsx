import styled from "styled-components";

export const CardProduct = styled.div<{maxWidth?: boolean; padding?: boolean}>`
    background: ${props => props.theme.white};
    min-width: 300px;
    max-width: 328px;
    min-height: 324px;
    padding: 16px;
    gap: 16px;
    border-radius: 4px;
    display: flex;
    flex-direction:column;
    align-items: center;
    ${props => props?.maxWidth && `
        width: 100%;
        max-width: none;
        min-width: initial;
        min-height: initial;
    `}
    ${props => props?.padding && `
        padding: 24px;
    `}
`