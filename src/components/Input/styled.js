import styled from "styled-components";

const variantStyles = {
    primary: "#ffffff",
    secondary: "#F1F3F5",
    disable: "#D8D8D8",
};

const sizeStyles = {
    small: "12px",
    medium: "16px",
    large: "18px",
};

export const StyledInput = styled.div`
    > input {
        width: 100%;
        height: 35px;

        font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
        font-size: ${(props) => sizeStyles[props.size] || sizeStyles.medium};
        font-weight: ${({ theme }) => theme.typography.weight.regular};
        line-height: 14px;
        letter-spacing: 0.5px;

        border: 1px solid ${({ theme }) => theme.palette.gray400};
        border-radius: ${({ theme }) => theme.borderRadius.radius4};
        background-color: ${(props) => variantStyles[props.variant] || variantStyles.primary};
        color: ${({ theme }) => theme.palette.gray800};

        &::placeholder {
            font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
            font-size: ${(props) => sizeStyles[props.size] || sizeStyles.medium};
            line-height: 14px;
            letter-spacing: 0.5px;
            color: ${({ theme }) => theme.palette.gray800};
        }

        &:focus {
            outline: none;
        }
    }
`;
