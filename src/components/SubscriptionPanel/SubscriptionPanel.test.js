import { render, screen } from "@testing-library/react";
import SubscriptionPanel from "./SubscriptionPanel";
import ultraMockPlan from "../../utils/mocks/mockPlans.json";
import React from "react";
import userEvent from "@testing-library/user-event";

const setStateMock = jest.fn();
const useStateMock = () => [ultraMockPlan, setStateMock];

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("Given a SubscriptionPanel function", () => {
  describe("When invoked", () => {
    test("Then it should render a heading with the text `Ultra`", () => {
      const expectedPlanText = "Ultra";

      jest.spyOn(React, "useState").mockImplementationOnce(useStateMock);
      render(<SubscriptionPanel />);
      const planType = screen.getByRole("heading", { name: expectedPlanText });

      expect(planType).toBeInTheDocument();
    });
  });

  describe("And the user clicks on the button with the text `Get Started`", () => {
    test("Then it should render a form with the text `JOIN OUR STARTER PLAN`", () => {
      const expectedButtonText = "Get Started";
      const expectedFormHeading = "JOIN OUR STARTER PLAN";

      render(<SubscriptionPanel />);
      const starterPlanButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      userEvent.click(starterPlanButton);
      const emailForm = screen.getByRole("form");
      const emailFormHeading = screen.getByText(expectedFormHeading);

      expect(emailForm).toBeInTheDocument();
      expect(emailFormHeading).toBeInTheDocument();
    });
  });
});
