import styled from 'styled-components'

export const Input = styled.input.attrs({ type: "text"})<{validate:boolean}>`
    width: 80%;
    height: 2.5rem;
    border-radius: 50px;
    border: 1px solid ${props => props.validate ? "red" : "gray"};
    background: black;
    transform: translateY(-30px);
    color: white;
    padding: 0 15px;
    font-size: 0.875rem;
outline: none;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ValidateMessage = styled.div`
    padding: 0 0.785rem;
    border: 1px solid red;
    border-radius: 8px;
    position: relative;
    bottom: 20px;
    margin: 0;
  
    h1{
        font-size: 1rem;
        color: red;
    }

`

