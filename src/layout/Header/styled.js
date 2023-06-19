import styled from "styled-components";

const StyledHeader = styled.header`
    height: 70px;

    border-bottom: 1px solid ${(p) => p.theme.palette.gray400};
    background-color: ${(p) => p.theme.palette.white};
    color: ${(p) => p.theme.palette.gray900};
`;

export default StyledHeader;
