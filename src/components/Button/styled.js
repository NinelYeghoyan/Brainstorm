import styled from "styled-components";

const variantStyles = {
    primary: "#407EFF",
    secondary: "#F1F3F5",
    disable: "#D8D8D8",
};

const sizeStyles = {
    small: "12px",
    medium: "16px",
    large: "18px",
};

const StyledButton = styled.button`
    min-width: 114px;
    height: 36px;

    font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
    font-size: ${(props) => sizeStyles[props.size] || sizeStyles.medium};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    line-height: 14px;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.radius4};
    background-color: ${(props) => variantStyles[props.variant] || variantStyles.primary};
    color: ${(p) => p.theme.palette.white};

    &:hover {
        background-color: ${(p) => p.theme.palette.blue100};
    }
`;

export default StyledButton;
