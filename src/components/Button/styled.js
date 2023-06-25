import styled from "styled-components";

const StyledButton = styled.button`
    width: ${(props) => (props.isFullWidth ? "100%" : "fit-content")};
    min-width: 114px;

    font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
    font-weight: ${({ theme }) => theme.typography.weight.regular};

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.radius4};
    transition: 0.2s 0.1s ease-in-out;

    &.primary {
        background-color: ${(p) => p.theme.palette.accent};
        color: ${(p) => p.theme.palette.white};

        &:hover {
            background-color: ${(p) => p.theme.palette.blue100};
        }
    }

    &.secondary {
        background-color: ${(p) => p.theme.palette.base};
        color: ${(p) => p.theme.palette.white};

        &:hover {
            background-color: ${(p) => p.theme.palette.primary};
        }
    }

    &.disable {
        pointer-events: none;
        touch-action: none;
        background-color: ${(p) => p.theme.palette.secondary};
        color: ${(p) => p.theme.palette.gray600};
    }

    &.small {
        height: 36px;
        font-size: ${({ theme }) => theme.typography.fontSize.p12};
        line-height: 14px;
    }

    &.medium {
        height: 38px;
        font-size: ${({ theme }) => theme.typography.fontSize.p14};
        line-height: 16px;
    }

    &.large {
        height: 40px;
        font-size: ${({ theme }) => theme.typography.fontSize.p16};
        line-height: 18px;
    }
`;

export default StyledButton;
