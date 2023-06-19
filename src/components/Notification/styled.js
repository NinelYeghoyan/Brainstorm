import styled from "styled-components";

const variantStyles = {
    primary: "#407EFF",
    secondary: "#42229D",
    warning: "#FFAD00",
};

const StyledNotification = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;

    font-size: ${(p) => p.theme.typography.fontSize.p12};
    line-height: 14px;

    background-color: ${(props) => variantStyles[props.variant] || variantStyles.primary};
    color: ${(p) => p.theme.palette.white};

    position: absolute;
    top: -10px;
    right: -10px;
`;

export default StyledNotification;
