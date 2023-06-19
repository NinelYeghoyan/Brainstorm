import styled from "styled-components";

const StyledNavigation = styled.nav`
    .BS-nav--item {
        height: 42px;
        transition: 0.2s 0.1s ease-in-out;

        &.active,
        &:hover {
            background-color: ${(p) => p.theme.palette.primary};
            color: ${(p) => p.theme.palette.white};
        }
    }

    .BS-nav--title {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        line-height: 16px;
    }

    .BS-nav--sub {
        > li {
            height: 42px;
            font-weight: ${(p) => p.theme.typography.weight.regular};
            transition: 0.2s 0.1s ease-in-out;

            > span {
                &:hover {
                    color: ${(p) => p.theme.palette.white};
                }
            }
        }
    }
`;

export default StyledNavigation;
