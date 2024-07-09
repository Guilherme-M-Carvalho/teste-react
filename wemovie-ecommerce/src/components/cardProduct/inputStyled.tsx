import styled from "styled-components";

export const InputStyled = styled.input`
    height: 26px;
    padding: 16px;
    border-radius: 4px;
    border: 1px;
    outline: none;
    width: 60px;
    border: 1px solid ${props => props.theme.grayBorder};

    @media  (max-width: 576px){
        width: 30px;
        padding: 4px;
    }
`