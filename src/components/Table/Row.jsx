import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import IconEmail from "../../assets/icons/Email";
import IconTrash from "../../assets/icons/Trash";
import { routes } from "../../routes/routes";
import Avatar from "../Avatar";
import Checkbox from "../Checkbox";
import Switch from "../Switch";
import Tooltip from "../Tooltip";

import { StyledTableRow } from "./styled";

const TableRow = ({ item, onStateUpdate, onDelete }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(routes.editUser.path.replace(":id", item.id));
    };

    return (
        <StyledTableRow className="BS-table-row flex items-center">
            <li className="width-48 flex items-center pl-24">
                <Checkbox />
            </li>
            <li className="width-83 flex items-center pl-24">
                <Avatar onRedirect={handleRedirect} image={item.photo} />
            </li>
            <li className="width-226 flex items-center pl-24">{item.name}</li>
            <li className="width-219 flex items-center pl-24">{item.location}</li>
            <li className="width-277 flex items-center pl-24">{item.registeredDate}</li>
            <li className="width-433 flex items-center grow pl-24">{item.lastActiveDate}</li>
            <li className="width-146 flex items-center relative pl-24">
                <Tooltip text={item.email} component={<IconEmail />} />
            </li>

            <li className="width-100 flex-between pr-34">
                <Switch
                    id={item.id}
                    state={item.disabled}
                    onStateUpdate={() => onStateUpdate(item.id, !item.disabled)}
                />

                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => onDelete(item.id)}
                    onKeyDown={() => onDelete(item.id)}
                    className="cursor-pointer"
                >
                    <IconTrash />
                </div>
            </li>
        </StyledTableRow>
    );
};

TableRow.propTypes = {
    item: PropTypes.shape({}).isRequired,
    onStateUpdate: PropTypes.func,
    onDelete: PropTypes.func,
};

TableRow.defaultProps = {
    onStateUpdate: null,
    onDelete: null,
};

export default TableRow;
