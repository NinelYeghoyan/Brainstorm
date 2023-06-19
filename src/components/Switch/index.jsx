import PropTypes from "prop-types";

import StyledSwitch from "./styled";

const Switch = ({ state, id, onStateUpdate }) => (
    <StyledSwitch onClick={onStateUpdate} className={`${state ? "disable" : ""} BS-switch`} htmlFor={`switch-${id}`}>
        <input type="checkbox" id={`switch-${id}`} />
        <div className="BS-switch--slider" />
    </StyledSwitch>
);

Switch.propTypes = {
    state: PropTypes.bool,
    id: PropTypes.number,
    onStateUpdate: PropTypes.func,
};

Switch.defaultProps = {
    state: false,
    id: 0,
    onStateUpdate: null,
};

export default Switch;
