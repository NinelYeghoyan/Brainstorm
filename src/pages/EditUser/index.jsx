import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Form from "../../components/Form";
import PageHeader from "../../components/PageHeader";
import PageLayout from "../../layout/PageLayout";
import { getUserById, putUsers, showUpdateMessage } from "../../redux/actions/action";
import { routes } from "../../routes/routes";

import StyledEditUser from "./styled";

const EditUser = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (userData, userId) => {
        dispatch(putUsers(userData, userId));
        navigate(routes.home.path);

        dispatch(showUpdateMessage("SHOW_EDIT_USER_MESSAGE"));

        setTimeout(() => {
            dispatch(showUpdateMessage(""));
        }, 2000);
    };

    useEffect(() => {
        dispatch(getUserById(id, true));
    }, [dispatch, id]);

    return (
        <StyledEditUser className="BS-edit-user">
            <PageLayout>
                <PageHeader text="editUser" />

                <Form onSubmit={handleSubmit} />
            </PageLayout>
        </StyledEditUser>
    );
};

export default EditUser;
