import React from "react";

function Options({ name, updateItemCountFn }) {
  return (
    <form>
      <input type="checkbox" id={name} onChange={(e) => updateItemCountFn(name, e.target.checked ? 1 : 0)} />
      <label htmlFor={name}>&nbsp;{name}</label>
    </form>
  );
}

export default Options;
