import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Message from "../../components/Message";
import Aside from "../Aside";
import Header from "../Header";

import StyledPageLayout from "./styled";

const PageLayout = ({ children, className }) => {
    const { message } = useSelector(({ users }) => users);

    return (
        <StyledPageLayout className={`${className} BS-page-layout flex`}>
            <Aside />

            <div className="BS-page-layout--inner relative">
                {message === "SHOW_NEW_USER_MESSAGE" && <Message text="newUserSuccessfullyMessage" />}
                {message === "SHOW_EDIT_USER_MESSAGE" && <Message text="editUserSuccessfullyMessage" />}

                <Header />

                <main className="BS-main pv-24 ph-50">{children}</main>
            </div>
        </StyledPageLayout>
    );
};

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

PageLayout.defaultProps = {
    className: "",
};

export default PageLayout;
