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
        src={`/img/plan-images/${type}.svg`}
        height={80}
      ></PricePlanImage>
      <PlanHeadingContainer
        className={`price__plan--${type.toLowerCase()}__header`}
      >
        <PlanTypeSubheading>{type}</PlanTypeSubheading>
        <PlanPriceHeading>
          {type !== "Starter" ? `$${price}` : price}
        </PlanPriceHeading>
        <PlanPeriodicity>per {period}</PlanPeriodicity>
      </PlanHeadingContainer>

      <PlanPerks>
        {includes.map((perk, index) => {
          return (
            <PlanPerkIncluded
              className={`price__plan--${type.toLowerCase()}--includedPerk`}
              key={index}
            >
              <img
                src={`/img/icons/check-${
                  type !== "Pro" ? "dark" : "light"
                }.svg`}
                alt="Check icon"
              />
              <p>{perk}</p>
            </PlanPerkIncluded>
          );
        })}
        {excludes.map((perk, index) => {
          return (
            <PlanPerkNotIncluded
              className={`price__plan--${type.toLowerCase()}--notIncludedPerk`}
              key={index + includes.length}
            >
              <img
                src={`/img/icons/check-${
                  type !== "Pro" ? "dark" : "light"
                }.svg`}
                alt="Check icon"
              />
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
