import Button from "../Button/Button";
import {
  PlanHeadingContainer,
  PlanPeriodicity,
  PlanPerkIncluded,
  PlanPerkNotIncluded,
  PlanPerks,
  PlanPriceHeading,
  PlanTypeSubheading,
  PricePlanImage,
  PricePlanStyled,
} from "./PricePlanStyled";

const PricePlan = ({
  plan: { type, price, period, includes, excludes, button },
  itemClass,
}) => {
  return (
    <PricePlanStyled className={itemClass}>
      <PricePlanImage
        alt="Person sitting with arms opened"
        src="/img/plan-images/chilling.svg"
        height={80}
        width={205}
      ></PricePlanImage>
      <PlanHeadingContainer>
        <PlanTypeSubheading>{type}</PlanTypeSubheading>
        <PlanPriceHeading>${price}</PlanPriceHeading>
        <PlanPeriodicity>per {period}</PlanPeriodicity>
      </PlanHeadingContainer>

      <PlanPerks>
        {includes.map((perk, index) => {
          return (
            <PlanPerkIncluded key={index}>
              <img src="/img/icons/check.svg" alt="Check icon" />
              <p>{perk}</p>
            </PlanPerkIncluded>
          );
        })}
        {excludes.map((perk, index) => {
          return (
            <PlanPerkNotIncluded key={index + includes.length}>
              <img src="/img/icons/check.svg" alt="Check icon" />
              <p>{perk}</p>
            </PlanPerkNotIncluded>
          );
        })}
      </PlanPerks>

      <Button text={button} />
    </PricePlanStyled>
  );
};

export default PricePlan;
