import styled from "styled-components";

const StyledTable = styled.div`
    width: 100%;
    min-width: 100%;
    overflow-y: auto;
`;

const StyledTableHead = styled.ul`
    > li {
        height: 54px;

        font-size: ${(p) => p.theme.typography.fontSize.p12};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        line-height: 14px;

        background-color: ${(p) => p.theme.palette.secondary};
        color: ${(p) => p.theme.palette.gray600};

        &:first-child {
            border-top-left-radius: ${(p) => p.theme.borderRadius.radius4};
            border-bottom-left-radius: ${(p) => p.theme.borderRadius.radius4};
        }

        &:last-child {
            border-top-right-radius: ${(p) => p.theme.borderRadius.radius4};
            border-bottom-right-radius: ${(p) => p.theme.borderRadius.radius4};
        }
    }

    .BS-table-head--icons {
        display: flex;
        flex-direction: column;

        > button {
            width: 8px;
            height: 6px;

            border: none;
            margin: 1px 0;
            padding: 0;
            background-color: transparent;
            color: ${(p) => p.theme.palette.gray100};
        }
    }
`;

const StyledTableRow = styled.ul`
    > li {
        height: 60px;

        font-size: ${(p) => p.theme.typography.fontSize.p12};
        line-height: 14px;

        border-bottom: 1px solid ${(p) => p.theme.palette.gray400};
        color: ${(p) => p.theme.palette.gray700};
    }
`;

export default StyledTable;
export { StyledTableHead, StyledTableRow };
