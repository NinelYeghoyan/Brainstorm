import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import StyledMessage from "./styled";

const Message = ({ text, className }) => {
    const { t } = useTranslation();

    return <StyledMessage className={`${className} BS-message pv-16 ph-16`}>{t(text)}</StyledMessage>;
};

Message.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

Message.defaultProps = {
    text: "",
    className: "",
};

export default Message;
