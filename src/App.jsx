import PricePlan from "./components/PricePlan/PricePlan";

const App = () => {
  return (
    <PricePlan planPrice={49} planType={"Pro"} planPeriodicity={"month"} />
  );
};

export default App;
