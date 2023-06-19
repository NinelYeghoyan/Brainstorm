import { useNavigate } from "react-router-dom";

import IconSearch from "../../assets/icons/Search";
import user from "../../assets/user.svg";
import Avatar from "../../components/Avatar";
import NotificationWrapper from "../../components/NotificationWrapper";
import { routes } from "../../routes/routes";

import StyledHeader from "./styled";

const Header = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(routes.home.path);
    };

    return (
        <StyledHeader className="BS-header flex-end ph-50">
            <div className="flex items-center mr-46">
                <IconSearch />

                <NotificationWrapper />
            </div>

            <Avatar onRedirect={handleRedirect} image={user} isProfileAvatar />
        </StyledHeader>
    );
};

export default Header;
