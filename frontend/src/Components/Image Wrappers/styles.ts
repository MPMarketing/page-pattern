import styled from "styled-components";

export const ImageWrap1 = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const LogoWrapper = styled.img`
    width: 25%;
    margin: 1rem 0;

    @media screen and (max-width: 768px){
        width: 40%;
    }
`