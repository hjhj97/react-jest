import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Options from "./Options";
import Products from "./Products";
import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";

function Type({ orderType }) {
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);
  const [orderDatas, updateItemCount] = useContext(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      let res = await axios.get(`http://localhost:5001/${orderType}`);
      setItems(res.data);
    } catch (error) {
      setIsError(true);
    }
  };

  if (isError) {
    return <ErrorBanner message="에러 발생" />;
  }

  const ItemComponents = orderType === "products" ? Products : Options;

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCountFn={(itemName, newItemCount) => {
        updateItemCount(itemName, newItemCount, orderType);
      }}
    />
  ));

  return (
    <>
      <h2>주문 종류</h2>
      <p>하나당 가격 : </p>
      <p>총 가격 : {orderDatas.totals[orderType]} </p>
      <div style={{ display: "flex" }}>{optionItems}</div>
    </>
  );
}

export default Type;
