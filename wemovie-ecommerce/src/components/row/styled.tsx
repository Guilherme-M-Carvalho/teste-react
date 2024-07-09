import styled from "styled-components";

export const Row = styled.div<{mobile?: boolean; justifyContentCenter?: boolean; mb?: boolean; borderBottom?: boolean; paddingBottom?: boolean; reverse?: boolean}>`
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1* var(--bs-gutter-y));
    margin-right: calc(-.5* var(--bs-gutter-x));
    margin-left: calc(-.5* var(--bs-gutter-x));
    gap: 16px;
    row-gap:24px;
    width: 100%;
    ${props => props?.justifyContentCenter && `justify-content: center;`}
    ${props => props?.mb && `margin-bottom: 40px;`}
    ${props => props?.paddingBottom && `padding-bottom: 24px;`}
    ${props => props?.borderBottom && `border-bottom: 1px solid ${props.theme.gray};`}

    ${props => props.mobile && `
        @media (max-width: 576px) {
            display: none;
        }
    `}

    ${props => props.reverse && `
        @media (max-width: 576px) {
            flex-direction: column-reverse;
        }
    `}
`