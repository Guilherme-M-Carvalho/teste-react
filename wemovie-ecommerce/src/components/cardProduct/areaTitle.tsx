import styled from "styled-components";

export const AreaTitle = styled.div`

    & > div {
        @media  (max-width: 576px){
            display: flex;
            justify-content: space-between;
            width:100%;
            align-items: center;
        }
    }
    & > div:last-child {
        display:none;
        @media  (max-width: 576px){
            display: flex;
            justify-content: space-between;
            width:100%;
            align-items: center;
            & > div {
                display: flex;
                gap:8px;
                align-items: center;
            }
        }
    }
    @media  (max-width: 576px){
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        width:100%;
        height: 100%;
    }

`