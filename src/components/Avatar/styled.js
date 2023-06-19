import styled from "styled-components";

const StyledAvatar = styled.div`
    .BS-avatar--box {
        width: 40px;
        height: 40px;
        overflow: hidden;

        border-radius: 50%;
        background-color: ${(p) => p.theme.palette.gray500};
    }

    .BS-avatar--active {
        width: 9px;
        height: 9px;

        position: absolute;
        right: 4px;
        bottom: 0;

        border: 1px solid ${(p) => p.theme.palette.white};
        background-color: ${(p) => p.theme.palette.green100};
        border-radius: 50%;
    }
`;

export default StyledAvatar;
