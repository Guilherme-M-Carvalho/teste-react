import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x)* .5);
    padding-left: calc(var(--bs-gutter-x)* .5);
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
        max-width: 540px;
    }
    
    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`