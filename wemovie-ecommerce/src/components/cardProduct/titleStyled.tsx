import styled from "styled-components";

export const TitleStyled = styled.p<{size?: boolean}>`
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
    text-align: center;
    color: ${props => props.theme.black};
    ${props => props.size && `font-size: 14px;`}
`