import PricePlan from "./components/PricePlan/PricePlan";
import plans from "./utils/plans.json";

const App = () => {
  return <PricePlan plan={plans.pro} />;
};

export default App;
