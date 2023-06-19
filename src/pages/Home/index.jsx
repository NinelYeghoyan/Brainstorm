import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Changer from "../../components/Changer";
import PageHeader from "../../components/PageHeader";
import PageLayout from "../../components/PageLayout";
import Table from "../../components/Table";
import { updateGetUserById } from "../../redux/actions/types";
import { routes } from "../../routes/routes";

import StyledHome from "./styled";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRedirect = () => {
        dispatch(updateGetUserById({}));
        navigate(routes.newUser.path);
    };

    return (
        <StyledHome className="BS-home">
            <PageLayout>
                <PageHeader text="allUsers" hasButton onRedirect={handleRedirect} />

                <Table className="mt-26" />

                <Changer className="mt-124" />
            </PageLayout>
        </StyledHome>
    );
};
export default Home;
