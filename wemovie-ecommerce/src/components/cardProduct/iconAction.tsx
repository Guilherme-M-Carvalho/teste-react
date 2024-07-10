import styled from "styled-components";

export const IconAction = styled.img<{mdHide?: boolean; mlAuto?: boolean }>`
    width: 18px;
    height: 18px;
    cursor: pointer;
    ${props => props.mlAuto && `margin-left: auto;`}
    ${props => props.mdHide && `
        display: none;
        @media  (max-width: 576px){
            display: block;
        }
    `}
`