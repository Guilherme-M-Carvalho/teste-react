import styled from "styled-components";

export const Img = styled.img<{ mobile?: boolean }>`
    width: 147px;
    height: 188px;


    ${props => props.mobile && `
        @media (max-width: 576px) {
            width: 44px;
            height: 62px;
            margin-right: 4px;
        }
    `}
`