import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img{
        width: 150px;
        height: 60px;
        margin: 2rem;
    }

    hr{
        border: none;
        border-top: 1px dashed gray;
        height: 1px;
        width: 90%;
    }
`;