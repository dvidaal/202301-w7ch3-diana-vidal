import styled from "styled-components";

const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .button-expression {
    background-image: linear-gradient(150deg, #9500ff, #09f, #00ddff);
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    transition: 0.3s;
  }

  button:active {
    transform: scale(0.9);
  }
`;

export default ButtonStyled;
