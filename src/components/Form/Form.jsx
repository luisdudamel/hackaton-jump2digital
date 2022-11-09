import Button from "../Button/Button";
import { FormStyled, FormStyledContainer } from "./FormStyled";

const Form = ({ submitForm, planType }) => {
  const submitRegister = (event) => {
    event.preventDefault();
    submitForm(event);
  };

  return (
    <FormStyledContainer>
      <FormStyled onSubmit={submitRegister}>
        <i
          onClick={submitForm}
          className="fa-solid fa-circle-xmark form__closeButton"
        ></i>
        <h4>JOIN OUR {planType} PLAN</h4>
        <label hidden={true} htmlFor="email">
          Email
        </label>
        <input
          className="form__email"
          type="email"
          placeholder="Enter your email"
          id="email"
        />
        <Button text={"Join"} type="submit" />
        <p>One of our representatives will contact you soon.</p>
      </FormStyled>
    </FormStyledContainer>
  );
};

export default Form;
