import styled from "styled-components";

const StyledImageUpload = styled.div`
    .BS-image-upload--input {
        width: 156px;
        height: 42px;
        overflow: hidden;

        border: 1px solid ${(p) => p.theme.palette.accent};
        border-radius: ${(p) => p.theme.borderRadius.radius4};
        background-color: ${(p) => p.theme.palette.white};
        color: ${(p) => p.theme.palette.accent};
    }

    .BS-image-upload--text {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        line-height: 16px;
    }

    .BS-image-upload--input-hidden {
        height: 100%;

        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;

        opacity: 0;
        -moz-opacity: 0;
    }

    .BS-image-upload--selected {
        width: 150px;
        height: 150px;
        overflow: hidden;

        border-radius: 50%;
        background-color: ${(p) => p.theme.palette.gray500};
    }
`;

export default StyledImageUpload;
