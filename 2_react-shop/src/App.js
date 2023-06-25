import OrderPage from "./pages/Order/OrderPage";
import { OrderContextProvider } from "./contexts/OrderContext";
function App() {
  return (
    <div>
      <OrderContextProvider>
        <OrderPage />
      </OrderContextProvider>
    </div>
  );
}

export default App;
