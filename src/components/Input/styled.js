import styled from "styled-components";

export const StyledInput = styled.div`
    > input {
        width: 100%;

        font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
        font-weight: ${({ theme }) => theme.typography.weight.regular};
        letter-spacing: 0.5px;

        border: 1px solid ${({ theme }) => theme.palette.gray400};
        border-radius: ${({ theme }) => theme.borderRadius.radius4};

        &::placeholder {
            font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
            letter-spacing: 0.5px;
        }

        &:focus {
            outline: none;
        }

        &.primary {
            background-color: ${({ theme }) => theme.palette.white};
            color: ${({ theme }) => theme.palette.gray800};

            &::placeholder {
                color: ${({ theme }) => theme.palette.gray800};
            }
        }

        &.secondary {
            background-color: ${({ theme }) => theme.palette.base};
            color: ${({ theme }) => theme.palette.white};

            &::placeholder {
                color: ${({ theme }) => theme.palette.white};
            }
        }

        &.disable {
            pointer-events: none;
            touch-action: none;
            background-color: ${({ theme }) => theme.palette.secondary};
            color: ${({ theme }) => theme.palette.gray600};

            &::placeholder {
                color: ${({ theme }) => theme.palette.gray600};
            }
        }

        &.small {
            height: 36px;
            font-size: ${({ theme }) => theme.typography.fontSize.p12};
            line-height: 14px;

            &::placeholder {
                font-size: ${({ theme }) => theme.typography.fontSize.p12};
                line-height: 14px;
            }
        }

        &.medium {
            height: 38px;
            font-size: ${({ theme }) => theme.typography.fontSize.p14};
            line-height: 16px;

            &::placeholder {
                font-size: ${({ theme }) => theme.typography.fontSize.p14};
                line-height: 16px;
            }
        }

        &.large {
            height: 40px;
            font-size: ${({ theme }) => theme.typography.fontSize.p16};
            line-height: 18px;

            &::placeholder {
                font-size: ${({ theme }) => theme.typography.fontSize.p16};
                line-height: 18px;
            }
        }
    }
`;
