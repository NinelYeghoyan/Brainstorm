import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import IconSortDown from "../../assets/icons/SortDown";
import IconSortUp from "../../assets/icons/SortUp";
import Checkbox from "../Checkbox";

import { StyledTableHead } from "./styled";

const TableHead = ({ onSort }) => {
    const { t } = useTranslation();

    return (
        <StyledTableHead className="BS-table-head flex items-center">
            <li className="width-48 flex items-center pl-24">
                <Checkbox />
            </li>
            <li className="width-83 flex items-center pl-24">
                {t("photo")}

                <div className="BS-table-head--icons ml-12">
                    <button type="button" className="flex-center cursor-pointer" onClick={() => onSort("photo", "asc")}>
                        <IconSortUp />
                    </button>
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => onSort("photo", "desc")}
                    >
                        <IconSortDown />
                    </button>
                </div>
            </li>
            <li className="width-226 flex items-center pl-24">
                {t("name")}

                <div className="BS-table-head--icons ml-12 cursor-pointer">
                    <button type="button" className="flex-center cursor-pointer" onClick={() => onSort("name", "asc")}>
                        <IconSortUp />
                    </button>
                    <button type="button" className="flex-center cursor-pointer" onClick={() => onSort("name", "desc")}>
                        <IconSortDown />
                    </button>
                </div>
            </li>
            <li className="width-219 flex items-center pl-24">
                {t("location")}

                <div className="BS-table-head--icons ml-12 cursor-pointer">
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => onSort("location", "asc")}
                    >
                        <IconSortUp />
                    </button>
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => onSort("location", "desc")}
                    >
                        <IconSortDown />
                    </button>
                </div>
            </li>
            <li className="width-277 flex items-center pl-24">
                {t("registeredDate")}

                <div className="BS-table-head--icons ml-12 cursor-pointer">
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => onSort("registeredDate", "asc")}
                    >
                        <IconSortUp />
                    </button>
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => onSort("registeredDate", "desc")}
                    >
                        <IconSortDown />
                    </button>
                </div>
            </li>
            <li className="width-433 flex items-center grow pl-24">
                {t("lastActiveDate")}

                <div className="BS-table-head--icons ml-12 cursor-pointer">
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => onSort("lastActiveDate", "asc")}
                    >
                        <IconSortUp />
                    </button>
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => onSort("lastActiveDate", "desc")}
                    >
                        <IconSortDown />
                    </button>
                </div>
            </li>
            <li className="width-146 flex items-center pl-24">{t("email")}</li>
            <li className="width-100 flex-center pr-34">{t("actions")}</li>
        </StyledTableHead>
    );
};

TableHead.propTypes = {
    onSort: PropTypes.func,
};

TableHead.defaultProps = {
    onSort: null,
};

export default TableHead;
