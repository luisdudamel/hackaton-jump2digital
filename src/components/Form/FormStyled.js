import styled from "styled-components";

export const FormStyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(103, 122, 100, 0.4);
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  align-items: center;
  border-radius: 8px;

  button {
    order: 0;
    margin-top: 10px;
    align-self: auto;
    width: 80px;
  }
  p {
    font-size: 12px;
  }

  .form {
    &__email {
      height: 35px;
      border-radius: 8px;
      border: solid 1px black;
      font-size: 14px;
      text-align: center;
    }

    &__closeButton {
      position: relative;
      right: -200px;
      top: -5px;
      font-size: 20px;
      background-color: white;
      border-radius: 50%;
      color: red;
      cursor: pointer;
    }
  }
`;
