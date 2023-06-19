import styled from "styled-components";

const StyledMessage = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius.radius10};
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    filter: drop-shadow(0px 2px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.05));

    background-color: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.gray700};

    font-size: ${(p) => p.theme.typography.fontSize.p16};
    font-weight: ${(p) => p.theme.typography.weight.medium};
    text-align: center;

    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
`;

export default StyledMessage;
