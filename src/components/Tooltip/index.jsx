import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { useCopy } from "../../hooks/useCopy";

import { StyledTooltip } from "./styled";

const Tooltip = ({ component, text, className }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const { isCopied, handleCopy } = useCopy(text);
    const { t } = useTranslation();
    const tooltipRef = useRef(null);

    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };

    const handleClickOutside = (event) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
            setShowTooltip(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <StyledTooltip ref={tooltipRef} className={`${className} BS-tooltip relative inline-block`}>
            <div
                role="button"
                tabIndex={0}
                onClick={() => {
                    handleCopy();
                    toggleTooltip();
                }}
                onKeyDown={() => {
                    handleCopy();
                    toggleTooltip();
                }}
                className="BS-tooltip--icon flex-center cursor-pointer"
            >
                {component}
            </div>

            {isCopied && showTooltip && (
                <div className="BS-tooltip--text ph-16 pv-10">
                    <span>{text}</span>
                    <span>{t("isCopied")}</span>
                </div>
            )}
        </StyledTooltip>
    );
};

Tooltip.propTypes = {
    component: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Tooltip.defaultProps = {
    className: "",
};

export default Tooltip;
