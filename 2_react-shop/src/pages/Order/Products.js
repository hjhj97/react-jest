import React from "react";

function Products({ name, imagePath }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img style={{ width: "80%" }} src={`http://localhost:5001${imagePath}`} alt={`${name} product`} />
      <form>
        <label>{name}</label>
        <input type="number" min="0" defaultValue={0} />
      </form>
    </div>
  );
}

export default Products;
