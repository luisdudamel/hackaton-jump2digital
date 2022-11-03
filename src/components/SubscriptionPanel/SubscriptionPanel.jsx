import plans from "../../utils/plans.json";
import PricePlan from "../PricePlan/PricePlan";
import {
  SubscriptionPanelContainer,
  SubscriptionPanelStyled,
} from "./SubscriptionPanelStyled";

const SubscriptionPanel = () => {
  return (
    <SubscriptionPanelContainer>
      <SubscriptionPanelStyled>
        <PricePlan plan={plans.pro}></PricePlan>
        <PricePlan plan={plans.pro}></PricePlan>
        <PricePlan plan={plans.pro}></PricePlan>
      </SubscriptionPanelStyled>
    </SubscriptionPanelContainer>
  );
};

export default SubscriptionPanel;
