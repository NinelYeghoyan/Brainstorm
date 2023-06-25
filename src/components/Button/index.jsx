import PropTypes from "prop-types";

import StyledButton from "./styled";

const Button = ({ children, type, variant, size, className, ...rest }) => (
    <StyledButton
        className={`${variant} ${size} ${className} BS-button cursor-pointer ph-12`}
        isFullWidth
        type={type}
        {...rest}
    >
        {children}
    </StyledButton>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variant: PropTypes.oneOf(["primary", "secondary", "disable"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    isFullWidth: PropTypes.bool,
    className: PropTypes.string,
};

Button.defaultProps = {
    type: "button",
    variant: "primary",
    size: "medium",
    isFullWidth: false,
    className: "",
};

export default Button;
