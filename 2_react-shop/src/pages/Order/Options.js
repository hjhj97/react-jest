import React from "react";

function Options({ name }) {
  return (
    <form>
      <input type="checkbox" id={`${name} option`} />
      <label htmlFor={`${name} option`}>&nbsp;{name}</label>
    </form>
  );
}

export default Options;
