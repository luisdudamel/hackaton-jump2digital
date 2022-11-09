import StyledButton from "./ButtonStyled";

const Button = ({ action, text }) => {
  return <StyledButton onClick={action}>{text}</StyledButton>;
};

export default Button;
