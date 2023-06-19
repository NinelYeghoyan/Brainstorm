import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { deleteUsers, getSort, getUsers, patchUsers } from "../../redux/actions/action";

import TableHead from "./Head";
import TableRow from "./Row";
import StyledTable from "./styled";

const Table = ({ className }) => {
    const dispatch = useDispatch();
    const { items } = useSelector(({ users }) => users);

    const handleSort = (sort, order) => {
        dispatch(getSort(sort, order));
    };

    const handleStateUpdate = (id, disabled) => {
        const updatedData = { disabled };

        dispatch(patchUsers(updatedData, id));
    };

    const handleDelete = (id) => {
        dispatch(deleteUsers(id));
    };

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <StyledTable className={`${className} BS-table`}>
            <TableHead onSort={handleSort} />

            <div className="BS-table--body">
                {items.slice(0, 10).map((item) => (
                    <TableRow key={item.id} item={item} onStateUpdate={handleStateUpdate} onDelete={handleDelete} />
                ))}
            </div>
        </StyledTable>
    );
};

Table.propTypes = {
    className: PropTypes.string,
};

Table.defaultProps = {
    className: "",
};

export default Table;
