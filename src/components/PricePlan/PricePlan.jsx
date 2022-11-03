import Button from "../Button/Button";
import {
  PlanHeadingContainer,
  PlanPeriodicity,
  PlanPriceHeading,
  PlanTypeSubheading,
  PricePlanImage,
  PricePlanStyled,
} from "./PricePlanStyled";

const PricePlan = ({ plan }) => {
  return (
    <PricePlanStyled>
      <PricePlanImage
        alt="Person sitting with arms opened"
        src="/img/plan-images/chilling.svg"
        height={80}
        width={205}
      ></PricePlanImage>
      <PlanHeadingContainer>
        <PlanTypeSubheading>{plan.type}</PlanTypeSubheading>
        <PlanPriceHeading>${plan.price}</PlanPriceHeading>
        <PlanPeriodicity>per {plan.period}</PlanPeriodicity>
      </PlanHeadingContainer>
      <Button text={plan.button} />
    </PricePlanStyled>
  );
};

export default PricePlan;
