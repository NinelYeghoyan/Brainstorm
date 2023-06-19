import styled from "styled-components";

export const StyledTooltip = styled.div`
    width: max-content;

    .BS-tooltip--icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;

        > svg {
            cursor: pointer;
        }
    }

    .BS-tooltip--text {
        position: absolute;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;

        font-size: ${(p) => p.theme.typography.fontSize.p12};
        text-align: center;

        transition: 0.2s 0.1s ease-in-out;

        border-radius: ${({ theme }) => theme.borderRadius.radius10};
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
        filter: drop-shadow(0px 2px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.05));

        background-color: ${({ theme }) => theme.palette.white};
        color: ${({ theme }) => theme.palette.gray700};

        &:after {
            content: "";

            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);

            border-width: 10px;
            border-style: solid;
            border-color: ${({ theme }) => theme.palette.white} transparent transparent transparent;
        }
    }
`;
