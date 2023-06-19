import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Pagination from "../Pagination";

import StyledChanger from "./styled";

const Changer = ({ className }) => {
    const { t } = useTranslation();
    const { items } = useSelector(({ users }) => users);

    const filteredItems = items.filter((item) => item.disabled === false);

    return (
        <StyledChanger className={`${className} BS-changer flex-between pv-22 ph-22`}>
            <div>
                <h6 className="BS-changer--title">{t("changer")}</h6>
                <Pagination className="mt-34" />
            </div>

            <p className="BS-changer--text">
                {t("totalNumberOfUsers")}
                <span className="ml-16"> {`${filteredItems.length}.${items.length}`}</span>
            </p>
        </StyledChanger>
    );
};

export default Changer;
