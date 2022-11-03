import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button function", () => {
  describe("When invoked with the text `Click here`", () => {
    test("Then it should render a button with the text `Click here`", () => {
      const expectedButtonElement = "button";
      const buttonText = "Click here";
      const expectedButtonText = "Click here";

      render(<Button text={buttonText} />);
      const button = screen.getByRole(expectedButtonElement, {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
