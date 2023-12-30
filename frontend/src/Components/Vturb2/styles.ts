import styled from "styled-components";

export const Diveturb = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 60%;
    overflow-x: hidden;
    margin-top: 3rem;

    div img {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 768px){
        width: 100vw;
    }
`