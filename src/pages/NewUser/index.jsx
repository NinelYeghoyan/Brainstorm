import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Form from "../../components/Form";
import PageHeader from "../../components/PageHeader";
import PageLayout from "../../layout/PageLayout";
import { postUsers, showUpdateMessage } from "../../redux/actions/action";
import { routes } from "../../routes/routes";

import StyledNewUser from "./styled";

const NewUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (userData) => {
        dispatch(postUsers(userData));
        navigate(routes.home.path);

        dispatch(showUpdateMessage("SHOW_NEW_USER_MESSAGE"));

        setTimeout(() => {
            dispatch(showUpdateMessage(""));
        }, 2000);
    };

    return (
        <StyledNewUser className="BS-new-user">
            <PageLayout>
                <PageHeader text="newUser" />

                <Form onSubmit={handleSubmit} />
            </PageLayout>
        </StyledNewUser>
    );
};

export default NewUser;
