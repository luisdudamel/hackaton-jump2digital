import { useEffect, useState } from "react";
import plans from "../../utils/plans.json";
import Form from "../Form/Form";
import PricePlan from "../PricePlan/PricePlan";
import {
  SubscriptionLayout,
  SubscriptionPanelContainer,
  SubscriptionPanelStyled,
} from "./SubscriptionPanelStyled";

const SubscriptionPanel = () => {
  const [currentPlans, setCurrentPlans] = useState(plans);
  const plansList = Object.entries(currentPlans);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [planToSubscribe, setPlanToSubscribe] = useState("");

  const submitRegister = (planType) => {
    setIsFormOpen(!isFormOpen);
    setPlanToSubscribe(planType);
  };

  useEffect(() => {
    setCurrentPlans(plans);
  }, []);

  return (
    <>
      {isFormOpen && (
        <Form planType={planToSubscribe} submitForm={submitRegister} />
      )}
      <SubscriptionPanelContainer>
        <SubscriptionLayout>
          <SubscriptionPanelStyled>
            {plansList.map((plan, index) => {
              return (
                <PricePlan
                  itemClass={`price__plan--${plan[0]}`}
                  key={index}
                  plan={plan[1]}
                  openForm={() => submitRegister(plan[0].toUpperCase())}
                />
              );
            })}
          </SubscriptionPanelStyled>
        </SubscriptionLayout>
      </SubscriptionPanelContainer>
    </>
  );
};

export default SubscriptionPanel;
