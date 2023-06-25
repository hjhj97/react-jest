import React from "react";

function Products({ name, imagePath, updateItemCountFn }) {
  //console.log(updateItemCountFn);
  const handleChange = (event) => {
    const currentValue = event.target.value;
    updateItemCountFn(name, currentValue, "products");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img style={{ width: "80%" }} src={`http://localhost:5001${imagePath}`} alt={`${name} product`} />
      <form>
        <label htmlFor={name}>{name}</label>
        <input id={name} type="number" min="0" defaultValue={0} onChange={handleChange} />
      </form>
    </div>
  );
}

export default Products;
