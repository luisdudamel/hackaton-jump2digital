import { useEffect, useState } from "react";
import plans from "../../utils/plans.json";
import PricePlan from "../PricePlan/PricePlan";
import {
  SubscriptionLayout,
  SubscriptionPanelContainer,
  SubscriptionPanelStyled,
} from "./SubscriptionPanelStyled";

const SubscriptionPanel = () => {
  const [currentPlans, setCurrentPlans] = useState(plans);
  const plansList = Object.entries(currentPlans);

  useEffect(() => {
    setCurrentPlans(plans);
  }, []);

  return (
    <SubscriptionPanelContainer>
      <SubscriptionLayout>
        <SubscriptionPanelStyled>
          {plansList.map((plan, index) => {
            return (
              <PricePlan
                itemClass={`price__plan--${plan[0]}`}
                key={index}
                plan={plan[1]}
              />
            );
          })}
        </SubscriptionPanelStyled>
      </SubscriptionLayout>
    </SubscriptionPanelContainer>
  );
};

export default SubscriptionPanel;
