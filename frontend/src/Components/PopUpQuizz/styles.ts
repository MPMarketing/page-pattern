import styled from "styled-components";

export const PopUp = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: #54C5BB;
    z-index: 99999999999999999;
    position: fixed;
    text-align: center;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;

    h4 {
        margin-top: 3rem;
        font-size: 12px;
        padding: 1rem 1rem;
    }

    button {
        margin-top: 2rem;
        padding: 0.6rem;
        background-color: green;
        font-weight: 700;
        border-radius: 10px;
        border: 1px solid black;
        color: white;
    }
`