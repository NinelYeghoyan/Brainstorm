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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        location: "",
    });

    const { item } = useSelector(({ users }) => users);
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            ...formData,
            photo: item && item.photo,
            disabled: item && item.disabled,
            registeredDate: new Date().toISOString(),
            lastActiveDate: new Date().toISOString(),
        };

        onSubmit(userData, item.id);
    };

    useEffect(() => {
        if (item) {
            setFormData({
                name: item.name,
                email: item.email,
                location: item.location,
            });
        }
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <StyledForm className="BS-form mt-26 pv-52 ph-54">
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("userName")}
                    size="small"
                />
                <ImageUpload className="mt-16" />
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("email")}
                    size="small"
                    className="mt-16"
                />
                <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
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
