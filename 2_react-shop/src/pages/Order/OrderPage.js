import { useContext } from "react";
import Type from "./Type";
import { OrderContext } from "../../contexts/OrderContext";

function OrderPage() {
  const [orderDatas] = useContext(OrderContext);

  return (
    <div>
      <h2>Travel</h2>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div>
          <h2>Total Price : {orderDatas.totals.total}</h2>
          <button>주문</button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
