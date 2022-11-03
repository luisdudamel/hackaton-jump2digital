import Button from "../Button/Button";
import {
  PlanHeadingContainer,
  PlanPeriodicity,
  PlanPriceHeading,
  PlanTypeSubheading,
  PricePlanImage,
  PricePlanStyled,
} from "./PricePlanStyled";

const PricePlan = ({ planType, planPrice, planPeriodicity }) => {
  return (
    <PricePlanStyled>
      <PricePlanImage
        alt="Person sitting with arms opened"
        src="/img/plan-images/chilling.svg"
        height={80}
        width={205}
      ></PricePlanImage>
      <PlanHeadingContainer>
        <PlanTypeSubheading>{planType}</PlanTypeSubheading>
        <PlanPriceHeading>${planPrice}</PlanPriceHeading>
        <PlanPeriodicity>
          per {planPeriodicity === "year" ? `yearly` : `month`}
        </PlanPeriodicity>
      </PlanHeadingContainer>
      <Button text={"Become a Pro"} />
    </PricePlanStyled>
  );
};

export default PricePlan;
