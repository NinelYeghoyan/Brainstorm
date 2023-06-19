import PropTypes from "prop-types";

import { mockData } from "./__mock";
import StyledNotificationWrapper from "./styled";

const NotificationWrapper = ({ className }) => (
    <StyledNotificationWrapper className={`${className} BS-notification-wrapper flex items-center`}>
        {mockData.map((item) => (
            <li key={item.id} className="flex-center relative ml-32">
                {item.icon}

                {item.notification}
            </li>
        ))}
    </StyledNotificationWrapper>
);

NotificationWrapper.propTypes = {
    className: PropTypes.string,
};

NotificationWrapper.defaultProps = {
    className: "",
};

export default NotificationWrapper;
