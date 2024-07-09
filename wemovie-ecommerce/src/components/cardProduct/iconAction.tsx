import styled from "styled-components";

export const IconAction = styled.img<{mlAuto?: boolean }>`
    width: 18px;
    height: 18px;
    cursor: pointer;
    ${props => props.mlAuto && `margin-left: auto;`}
`