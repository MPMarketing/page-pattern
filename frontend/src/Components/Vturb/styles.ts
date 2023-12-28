import styled from "styled-components";

export const Diveturb = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    overflow-x: hidden;

    div img {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 768px){
        width: 100vw;
    }
`