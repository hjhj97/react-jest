import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";

function CompletePage({ setStep }) {
  const [orderDatas, _, resetOrderDatas] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    orderCompleted(orderDatas);
  }, [orderDatas]);

  const orderCompleted = async (orderDatas) => {
    try {
      const res = await axios.post("http://localhost:5001/order", orderDatas);
      setOrderHistory(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };
  //if (isError) {
  //  return <ErrorBanner message="에러 발생" />;
  //}

  const orderTableElem = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  return (
    <div>
      <h2>주문 성공</h2>
      <h3>주문 내역</h3>
      <table>
        <tbody>
          <tr>
            <th>주문 번호</th>
            <th>주문 가격</th>
          </tr>
          {orderTableElem}
        </tbody>
      </table>

      <button
        onClick={() => {
          resetOrderDatas();
          setStep(0);
        }}
      >
        처음으로
      </button>
    </div>
  );
}

export default CompletePage;
