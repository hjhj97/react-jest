import SummaryPage from "../SummaryPage";
import { render, screen } from "../../../test-utils";

test("checkbox and button", () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole("checkbox", { name: "주문 동의" });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: "주문 확인" });
  expect(confirmButton).toBeDisabled();
});
