import { render, screen } from "@testing-library/react";
import PricePlan from "./PricePlan";
import mockPlan from "../../utils/mocks/mockPlans.json";

describe("Given a PricePlan function", () => {
  describe("When its invoked with an ultra plan object with 100 as price, and 3 included features and 4 excluded features", () => {
    test("Then it should render a heading with the text `$100`", () => {
      const expectedPriceText = "$100";

      render(<PricePlan plan={mockPlan.ultra}></PricePlan>);
      const planPrice = screen.getByRole("heading", {
        name: expectedPriceText,
      });

      expect(planPrice).toBeInTheDocument();
    });
  });

  test("Then it should render a heading with the text `Ultra`", () => {
    const expectedPlanTypeText = "Ultra";

    render(<PricePlan plan={mockPlan.ultra}></PricePlan>);
    const planType = screen.getByRole("heading", {
      name: expectedPlanTypeText,
    });

    expect(planType).toBeInTheDocument();
  });

  test("Then it should render a list with 7 items", () => {
    const expectedListItems = 7;

    render(<PricePlan plan={mockPlan.ultra}></PricePlan>);
    const featureList = screen.getAllByRole("listitem");

    expect(featureList).toHaveLength(expectedListItems);
  });
});
