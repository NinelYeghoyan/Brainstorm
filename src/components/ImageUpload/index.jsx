import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import IconImage from "../../assets/icons/Image";

import StyledImageUpload from "./styled";

const ImageUpload = ({ className }) => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
        }
    };

    return (
        <StyledImageUpload className={`${className} BS-image-upload`}>
            {!selectedImage && (
                <div className="BS-image-upload--input flex items-center relative pl-20 cursor-pointer">
                    <IconImage />

                    <span className="BS-image-upload--text ml-10">{t("photo")}</span>

                    <input
                        className="BS-image-upload--input-hidden cursor-pointer"
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleImageUpload}
                    />
                </div>
            )}

            {selectedImage && (
                <div className="BS-image-upload--selected">
                    <img src={selectedImage} alt="Selected" className="w100 object-cover" />
                </div>
            )}
        </StyledImageUpload>
    );
};

ImageUpload.propTypes = {
    className: PropTypes.string,
};

ImageUpload.defaultProps = {
    className: "",
};

export default ImageUpload;
