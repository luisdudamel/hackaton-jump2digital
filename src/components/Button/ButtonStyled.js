import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  font-family: "Rubik";
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  gap: 8px;

  width: 204.33px;
  height: 40px;
  border-radius: 8px;
  background: #000000;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  color: var(--light-text);

  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  transition: all 0.2s;

  :active {
    filter: invert(1);
  }
  :hover {
    box-shadow: rgb(0 0 0 / 12%) 2px 2px 3px 0px,
      rgb(0 0 0 / 24%) 0px 1px 4px 2px;
  }
`;

export default StyledButton;
