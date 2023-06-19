import styled from "styled-components";

const StyledPageHeader = styled.div`
    .BS-page-header--title {
        font-size: ${(p) => p.theme.typography.fontSize.p18};
        line-height: 21px;
        color: ${(p) => p.theme.palette.bluishGray600};
    }

    .BS-page-header--line {
        width: 100%;
        height: 2px;
        background-color: ${(p) => p.theme.palette.gray300};
    }
`;

export default StyledPageHeader;
