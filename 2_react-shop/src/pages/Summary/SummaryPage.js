import React, { useState } from "react";

function SummaryPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <form>
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
