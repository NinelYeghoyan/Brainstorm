import { useTranslation } from "react-i18next";

import IconChevronLeft from "../../assets/icons/ChevronLeft";
import IconChevronRight from "../../assets/icons/ChevronRight";

import StyledPagination from "./styled";

const Pagination = ({ className }) => {
    const { t } = useTranslation();

    return (
        <StyledPagination className={`${className} BS-pagination flex item-center`}>
            <li className="BS-pagination--item disabled flex-center cursor-pointer">
                <IconChevronLeft />
            </li>
            <li className="BS-pagination--item flex-center cursor-pointer">1</li>
            <li className="BS-pagination--item flex-center cursor-pointer">2</li>
            <li className="BS-pagination--item flex-center cursor-pointer">3</li>
            <li className="BS-pagination--item flex-center cursor-pointer">4</li>
            <li className="BS-pagination--item flex-center cursor-pointer">
                <IconChevronRight />
            </li>
            <li className="flex-center ph-16 cursor-pointer">10 / {t("page")}</li>
        </StyledPagination>
    );
};

export default Pagination;
