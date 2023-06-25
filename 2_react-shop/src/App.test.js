import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("from order to order completion", async () => {
  const event = userEvent.setup();
  render(<App />);

  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  await event.clear(americaInput);
  await event.type(americaInput, "2");

  const englandInput = await screen.findByRole("spinbutton", {
    name: "England",
  });
  await event.clear(englandInput);
  await event.type(englandInput, "3");

  const insuranceCheckbox = await screen.findByRole("checkbox", {
    name: /insurance/i,
  });
  await event.click(insuranceCheckbox);

  const orderButton = await screen.findByRole("button", { name: "주문" });
  await event.click(orderButton);

  const summaryHeading = screen.getByRole("heading", { name: "주문 확인" });
  expect(summaryHeading).toBeInTheDocument();

  const productsHeading = screen.getByRole("heading", { name: "여행 상품 : 5000" });
  expect(productsHeading).toBeInTheDocument();

  const optionsHeading = screen.getByRole("heading", { name: "옵션 : 500" });
  expect(optionsHeading).toBeInTheDocument();

  expect(screen.getByText("2 America")).toBeInTheDocument();
  expect(screen.getByText("3 England")).toBeInTheDocument();
  expect(screen.getByText(/insurance/i)).toBeInTheDocument();

  const confirmCheckbox = screen.getByRole("checkbox", { name: "주문 동의" });
  await event.click(confirmCheckbox);

  const confirmOrderButton = screen.getByRole("button", { name: "주문 확인" });
  await event.click(confirmOrderButton);

  //const loading = screen.getByText(/loading/i);
  //expect(loading).toBeInTheDocument();

  const completeHeader = await screen.findByText("주문 성공");
  expect(completeHeader).toBeInTheDocument();
  //expect(loading).not.toBeInTheDocument();

  const firstPageButton = screen.getByRole("button", { name: "처음으로" });
  await event.click(firstPageButton);

  const productsTotal = screen.getAllByText("총 가격 : 0", { exact: false })[0];
  expect(productsTotal).toBeInTheDocument();

  const optionsTotal = screen.getAllByText("총 가격 : 0", { exact: false })[1];
  expect(optionsTotal).toBeInTheDocument();

  await waitFor(() => {
    screen.getByRole("spinbutton", { name: "America" });
  });
});
