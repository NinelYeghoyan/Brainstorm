import styled from "styled-components";

import checked from "../../assets/checked.svg";

export const StyledCheckbox = styled.div`
    > input {
        height: 14px;
        width: 14px;
        position: relative;

        background-color: ${(p) => p.theme.palette.white};
        border: 1px solid ${(p) => p.theme.palette.gray200};
        border-radius: ${(p) => p.theme.borderRadius.radius2};

        line-height: 0;
        outline: 0;
        padding: 0 !important;
        margin: 0;
        vertical-align: text-top;

        -webkit-appearance: none;
        cursor: pointer;

        &:checked {
            &:before {
                content: "";
                width: 15px;
                height: 15px;

                position: absolute;
                top: -1px;
                right: -2px;
                z-index: 2;

                border: none;
                border-radius: ${(p) => p.theme.borderRadius.radius2};
                background: ${(p) => p.theme.palette.accent} url(${checked}) no-repeat 2px 1px;
            }
        }
    }
`;
