import { render, screen } from "@testing-library/react";
import SubscriptionPanel from "./SubscriptionPanel";
import ultraMockPlan from "../../utils/mocks/mockPlans.json";
import React from "react";

const setStateMock = jest.fn();
const useStateMock = () => [ultraMockPlan, setStateMock];

describe("Given a SubscriptionPanel function", () => {
  describe("When invoked", () => {
    test("Then it should render a heading with the text `Ultra`", () => {
      const expectedPlanText = "Ultra";

      jest.spyOn(React, "useState").mockImplementation(useStateMock);
      render(<SubscriptionPanel />);
      const planType = screen.getByRole("heading", { name: expectedPlanText });

      expect(planType).toBeInTheDocument();
    });
  });
});
