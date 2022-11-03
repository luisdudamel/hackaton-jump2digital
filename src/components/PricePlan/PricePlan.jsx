import { PricePlanImage, PricePlanStyled } from "./PricePlanStyled";

const PricePlan = () => {
  return (
    <PricePlanStyled>
      <PricePlanImage
        alt="Person sitting with arms opened"
        src="/img/plan-images/chilling.svg"
        height={80}
        width={205}
      ></PricePlanImage>
    </PricePlanStyled>
  );
};

export default PricePlan;
