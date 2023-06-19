import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import Button from "../Button";

import StyledPageHeader from "./styled";

const PageHeader = ({ text, hasButton, onRedirect }) => {
    const { t } = useTranslation();

    return (
        <StyledPageHeader className="BS-page-header flex items-center">
            <h6 className="BS-page-header--title shrink-0">{t(text)}</h6>

            <div className="BS-page-header--line mr-32 ml-16" />

            {hasButton && (
                <Button onClick={onRedirect} variant="primary" type="button" size="small">
                    {t("newUser")}
                </Button>
            )}
        </StyledPageHeader>
    );
};

PageHeader.propTypes = {
    text: PropTypes.string,
    hasButton: PropTypes.bool,
    onRedirect: PropTypes.func,
};

PageHeader.defaultProps = {
    text: "",
    hasButton: false,
    onRedirect: null,
};

export default PageHeader;
