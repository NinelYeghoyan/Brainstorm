import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Button from "../Button";
import ImageUpload from "../ImageUpload";
import Input from "../Input";

import StyledForm from "./styled";

const Form = ({ onSubmit }) => {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");

    const { item } = useSelector(({ users }) => users);
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
            location,
            photo: item && item.photo,
            disabled: item && item.disabled,
            registeredDate: new Date().toISOString(),
            lastActiveDate: new Date().toISOString(),
        };

        onSubmit(userData, item.id);
    };

    useEffect(() => {
        if (item) {
            setName(item.name);
            setEmail(item.email);
            setLocation(item.location);
        }
    }, [item]);

    return (
        <StyledForm className="BS-form mt-26 pv-52 ph-54">
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("userName")}
                    size="small"
                />
                <ImageUpload className="mt-16" />
                <Input
                    type="email"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("email")}
                    size="small"
                    className="mt-16"
                />
                <Input
                    type="text"
                    value={location || ""}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={t("location")}
                    size="small"
                    className="mt-16"
                />
                <Button type="submit" size="small" className="mt-28">
                    {t("save")}
                </Button>
            </form>
        </StyledForm>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func,
};

Form.defaultProps = {
    onSubmit: null,
};

export default Form;
