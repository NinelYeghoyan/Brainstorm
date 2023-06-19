import i18next from "i18next";

import IconArrowTrendUp from "../../assets/icons/ArrowTrendUp";
import IconBox from "../../assets/icons/Box";
import IconBuilding from "../../assets/icons/Building";
import IconPlateUtensilsEmpty from "../../assets/icons/PlateUtensilsEmpty";
import IconPlateUtensilsFull from "../../assets/icons/PlateUtensilsFull";
import IconUser from "../../assets/icons/User";
import IconUsers from "../../assets/icons/Users";

export const mockData = [
    {
        id: 1,
        icon: <IconArrowTrendUp />,
        name: i18next.t("homepage"),
        subMenu: [],
    },
    {
        id: 2,
        icon: <IconUsers />,
        name: i18next.t("users"),
        subMenu: [],
    },
    {
        id: 3,
        icon: <IconUsers />,
        name: i18next.t("premiumUsers"),
        subMenu: [],
    },
    {
        id: 4,
        icon: <IconBuilding />,
        name: i18next.t("restaurants"),
        subMenu: [],
    },
    {
        id: 5,
        icon: <IconUser />,
        name: i18next.t("users"),
        subMenu: [
            {
                id: 1,
                name: i18next.t("quickStart"),
            },
            {
                id: 2,
                name: i18next.t("recipes"),
            },
            {
                id: 3,
                name: i18next.t("books"),
            },
            {
                id: 4,
                name: i18next.t("movies"),
            },
            {
                id: 5,
                name: i18next.t("dietician"),
            },
        ],
    },
    {
        id: 6,
        icon: <IconBox />,
        name: i18next.t("shop"),
        subMenu: [],
    },
    {
        id: 7,
        icon: <IconPlateUtensilsEmpty />,
        name: i18next.t("cuisine"),
        subMenu: [],
    },
    {
        id: 8,
        icon: <IconPlateUtensilsFull />,
        name: i18next.t("post"),
        subMenu: [],
    },
];
