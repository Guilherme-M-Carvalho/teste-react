import styled from "styled-components";

export const Col = styled.div<{  sm12?: boolean; smHide?:boolean; justifyContentCenter?: boolean; md4?: boolean; sm6?: boolean; auto?: boolean; alignItemsCenter?: boolean; gap?: boolean; justifyContentEnd?: boolean; sm?: boolean; justifyContentBetween?: boolean; justifyContentEndSm?: boolean }>`
    display: flex;
    flex: 1 0 0%;
    ${props => props?.auto && `
        flex: 0 0 auto;
        width: auto;
    `}

    ${props => props?.md4 && `
        flex: 0 0 auto;
        width: calc(33.33333333% - 16px);
    `
    }

    ${props => props?.gap && `
        gap: 16px;
    `}
    ${props => props?.justifyContentEnd && `
        justify-content: flex-end;
    `}
    ${props => props?.justifyContentCenter && `
        justify-content: center;
    `}

    ${props => props?.alignItemsCenter && `
        align-items: center;
        `}
        

    ${props => props?.justifyContentBetween && `
            @media  (max-width: 576px){
                justify-content: space-between !important;
            }
        `
    }
    ${props => props?.smHide && `
            @media  (max-width: 576px){
                display:none;
            }
        `
    }

    ${props => props?.sm && `
            @media  (max-width: 576px){
                flex: 0 0 auto;
                width: 100%;
            }
        `
    }
    ${props => props?.sm6 && `
            @media  (max-width: 576px){
                flex: 0 0 auto;
                width: calc(50% - 8px);
            }
        `
    }
    ${props => props?.sm12 && `
            @media  (max-width: 576px){
                flex: 0 0 auto;
                width: 100%;
            }
        `
    }

    ${props => props?.justifyContentEndSm && `
            @media  (max-width: 576px){
                justify-content: flex-end;
            }
        `
    }
    ${props => props?.gap && `
            @media  (max-width: 576px){
                gap: 4px;
            }
        `
    }

`