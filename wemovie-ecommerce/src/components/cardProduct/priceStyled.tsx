import styled from "styled-components";

export const Price = styled.p<{smShow?: boolean; smHide?: boolean;  large?: boolean; subTotal?: boolean}>`
font-size: 16px;
font-weight: 700;
line-height: 21.79px;
text-align: center;
color: ${props => props.theme.black};
${props => props.large && `font-size: 24px;`}
${props => props.smHide && `
        @media (max-width: 576px) {
            display: none;
            }
            `}
${props => props.smShow && `
    display: none;
    @media (max-width: 576px) {
        display: flex;
    }
`}
${props => props.subTotal && `
    @media  (max-width: 576px){
        display: flex;
        flex-direction: column;
        font-size: 12px;

        &::before{
            content: "SUBTOTAL";
            font-size: 10px;
            font-weight: 700;
            line-height: 16.34px;
            text-align: left;
            color: ${props.theme.gray};
        }
    }
    `}

`