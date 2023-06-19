import PropTypes from "prop-types";

import StyledNotification from "./styled";

const Notification = ({ value, variant }) => (
    <StyledNotification variant={variant} className="BS-notification flex-center">
        {value}
    </StyledNotification>
);

Notification.propTypes = {
    value: PropTypes.number,
    variant: PropTypes.oneOf(["primary", "secondary", "warning"]),
};

Notification.defaultProps = {
    value: 0,
    variant: "primary",
};

export default Notification;
