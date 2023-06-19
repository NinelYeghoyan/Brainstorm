import PropTypes from "prop-types";

import StyledButton from "./styled";

const Button = ({ children, type, variant, size, className, ...rest }) => (
    <StyledButton
        className={`${className} BS-button cursor-pointer ph-12`}
        type={type}
        variant={variant}
        size={size}
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
    className: PropTypes.string,
};

Button.defaultProps = {
    type: "button",
    variant: "primary",
    size: "medium",
    className: "",
};

export default Button;
