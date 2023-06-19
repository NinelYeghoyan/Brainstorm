import styled from "styled-components";

const StyledPageLayout = styled.div`
    .BS-page-layout--inner {
        min-height: 100vh;
        width: calc(100% - 240px);
        background-color: ${(p) => p.theme.palette.white};
    }

    .BS-main {
        height: calc(100vh - 70px);
        overflow-y: auto;
    }
`;

export default StyledPageLayout;
