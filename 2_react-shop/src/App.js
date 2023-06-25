import OrderPage from "./pages/Order/OrderPage";
import { OrderContextProvider } from "./contexts/OrderContext";
import { useState } from "react";

import SummaryPage from "./pages/Summary/SummaryPage";
import CompletePage from "./pages/Complete/CompletePage";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <OrderContextProvider>
        {step === 0 && <OrderPage setStep={setStep} />}
        {step === 1 && <SummaryPage setStep={setStep} />}
        {step === 2 && <CompletePage setStep={setStep} />}
      </OrderContextProvider>
    </div>
  );
}

export default App;
