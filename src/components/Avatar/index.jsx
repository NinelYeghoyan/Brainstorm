import PropTypes from "prop-types";

import StyledAvatar from "./styled";

const Avatar = ({ onRedirect, isProfileAvatar, image, className }) => (
    <StyledAvatar onClick={onRedirect} className={`${className} BS-avatar relative cursor-pointer`}>
        <div className="BS-avatar--box flex-center">
            <img src={image} alt="user" className={`${isProfileAvatar ? "" : "object-cover w100"}`} />
        </div>

        {isProfileAvatar && <div className="BS-avatar--active" />}
    </StyledAvatar>
);

Avatar.propTypes = {
    onRedirect: PropTypes.func,
    isProfileAvatar: PropTypes.bool,
    image: PropTypes.string,
    className: PropTypes.string,
};

Avatar.defaultProps = {
    onRedirect: null,
    isProfileAvatar: false,
    image: "",
    className: "",
};

export default Avatar;
