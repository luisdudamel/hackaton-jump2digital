import { render, screen } from "@testing-library/react";
import PricePlan from "./PricePlan";
import mockPlan from "../../utils/mocks/mockPlans.json";

describe("Given a PricePlan function", () => {
  describe("When its invoked with an ultra plan object with 100 as price, and 3 included features", () => {
    test("Then it should render a heading with the text `$100`", () => {
      const expectedPriceText = "$100";

      render(<PricePlan plan={mockPlan.ultra}></PricePlan>);
      const pricePlanPrice = screen.getByRole("heading", {
        name: expectedPriceText,
      });

      expect(pricePlanPrice).toBeInTheDocument();
    });
  });
});
