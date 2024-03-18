import styled from "styled-components";

export const StyledTask = styled.div`
    display: flex;
    color: white;
    justify-content: center;
    flex-wrap:wrap;
    word-break: break-all;

    hr{
        border: none;
        border-top: 1px dashed gray;
        height: 1px;
        width: 80%;
    }
    
`

export const Section = styled.section<{checked?: boolean}>`
    display: grid;
    grid-template-columns: 2rem 1fr 3rem;
    align-items: center;
    color: white;
    width: 80%;
    padding-left: 1rem;
    opacity: ${props => props.checked ? "0.2" : "1"};
  p{
    font-size: 20px;
    text-decoration: ${props => props.checked ? "line-through" : "none"};
    font-style: ${props => props.checked ? "italic" : "none"};
    cursor: pointer;
  }

  &:hover{
    background-color: #100f0f94;;
    border-radius: 8px;
  }
  
`

export const Button = styled.button`
background: transparent;
border: 0;
color: white;
cursor: pointer;
transition: color 0.2s;

&:hover{
  color: #B13D3D;
}

`

export const LabelCheck= styled.label`
     position: relative;
  overflow: hidden;
  display: flex;
  cursor: pointer;

  input{
    display: none;

    &:checked + span{
        border-color: #69D038;
        background-color: #69D038;
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='10px' viewBox='0 0 14 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 59.1 (86144) - https://sketch.com --%3E%3Ctitle%3Echeck%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='ios_modification' transform='translate(-27.000000, -191.000000)' fill='%23FFFFFF' fill-rule='nonzero'%3E%3Cg id='Group-Copy' transform='translate(0.000000, 164.000000)'%3E%3Cg id='ic-check-18px' transform='translate(25.000000, 23.000000)'%3E%3Cpolygon id='check' points='6.61 11.89 3.5 8.78 2.44 9.84 6.61 14 15.56 5.05 14.5 4'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-size: 14px 10px;
    }
  }


`

export const SpanCheck = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #69D038;
    background: transparent no-repeat center;
`