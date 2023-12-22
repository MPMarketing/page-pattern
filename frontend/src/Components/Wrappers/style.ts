import styled from "styled-components";

export const WrapperA = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const WrapperB = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
`;

export const WrapperC = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;

    @media screen and (min-width: 769px){
        width: 60%;
    }
`;

export const WrapperD = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: flex-start;
    width: 50%;

    @media screen and (max-width: 768px){
        width: 80%;
    }
`;

export const WrapperE = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 60%;
`;