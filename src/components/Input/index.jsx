import PropTypes from "prop-types";

import { StyledInput } from "./styled";

const Input = ({ type, placeholder, value, variant, size, className, ...rest }) => (
    <StyledInput className={`${className} BS-input`}>
        <input className={`${variant} ${size} ph-18`} value={value} type={type} placeholder={placeholder} {...rest} />
    </StyledInput>
);

Input.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password"]),
    placeholder: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary", "disable"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    className: PropTypes.string,
};

Input.defaultProps = {
    type: "text",
    placeholder: "",
    variant: "primary",
    size: "medium",
    className: "",
};

export default Input;
