import styled from "styled-components";

export const Img = styled.img<{ sm?: boolean; mobile?: boolean }>`
    width: 147px;
    height: 188px;


    ${props => props.mobile && `
        @media (max-width: 576px) {
            width: 44px;
            height: 62px;
            margin-right: 4px;
        }
    `}
    ${props => props.sm && `
        @media (max-width: 768px) {
            width: 80px;
            height: 106px;
        }
    `}
`