import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 320px;
    padding: 20px;
    color: var(--darkGrey);
    margin: 0 auto;

    input {
        width: 100%;
        height: 30px;
        border: 1px solid var(--darkGrey);
        border-radius: 20px;
        margin: 10px 0;
        padding: 10px;
    }

    .error {
        color: red;
    }
`;