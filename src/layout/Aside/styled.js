import styled from "styled-components";

const StyledAside = styled.aside`
    width: 240px;
    background-color: ${(p) => p.theme.palette.base};
    color: ${(p) => p.theme.palette.gray600};

    .BS-aside--header {
        height: 70px;
        background-color: ${(p) => p.theme.palette.bluishGray700};
    }
`;

export default StyledAside;
