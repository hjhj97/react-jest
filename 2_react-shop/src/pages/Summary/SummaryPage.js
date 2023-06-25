import React, { useContext, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";

function SummaryPage({ setStep }) {
  const [isChecked, setIsChecked] = useState(false);
  const [orderDatas] = useContext(OrderContext);

  const productArray = Array.from(orderDatas.products);
  const productList = productArray.map(([name, count]) => (
    <li key={name}>
      {count} {name}
    </li>
  ));

  const hasOptions = orderDatas.options.size > 0;
  let optionElem = null;
  if (hasOptions) {
    const optionsArray = Array.from(orderDatas.options.keys());
    const optionList = optionsArray.map((name) => <li key={name}>{name}</li>);
    optionElem = (
      <>
        <h2>옵션 : {orderDatas.totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div>
      <h1>주문 확인</h1>
      <h1>여행 상품 : {orderDatas.totals.products}</h1>
      <ul>{productList}</ul>
      {optionElem}
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          checked={isChecked}
          id="confirm-checkbox"
          onClick={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="confirm-checkbox">주문 동의</label>
        <br />
        <button type="submit" disabled={!isChecked}>
          주문 확인
        </button>
      </form>
    </div>
  );
}

export default SummaryPage;
