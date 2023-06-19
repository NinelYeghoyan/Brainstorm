import styled from "styled-components";

const StyledChanger = styled.div`
    border: 1px solid ${(p) => p.theme.palette.gray400};
    background-color: ${(p) => p.theme.palette.white};

    .BS-changer--title {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        line-height: 16px;
        color: ${(p) => p.theme.palette.gray900};
    }

    .BS-changer--text {
        font-size: ${(p) => p.theme.typography.fontSize.p18};
        line-height: 21px;
        color: ${(p) => p.theme.palette.gray700};

        > span {
            font-weight: ${(p) => p.theme.typography.weight.bold};
            color: ${(p) => p.theme.palette.accent};
        }
    }
`;

export default StyledChanger;
