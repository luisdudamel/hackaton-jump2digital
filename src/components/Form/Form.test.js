import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Given a Form function", () => {
  describe("When invoked with the `ULTRA` plan", () => {
    test("Then it should render a form with a heading with the text `JOIN OUR ULTRA PLAN`", () => {
      const expectedFormHeading = "JOIN OUR ULTRA PLAN";
      const currentPlan = "ULTRA";

      render(<Form planType={currentPlan} />);
      const formHeading = screen.getByRole("heading", {
        name: expectedFormHeading,
      });

      expect(formHeading).toBeInTheDocument();
    });
  });

  describe("When invoked with a function passed and the user clicks on the button with the text `Join`", () => {
    test("Then the funcion passed should be called", () => {
      const expectedButtonText = "Join";
      const functionToCall = jest.fn();

      render(<Form submitForm={functionToCall} />);
      const joinButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      userEvent.click(joinButton);

      expect(functionToCall).toHaveBeenCalled();
    });
  });
});
