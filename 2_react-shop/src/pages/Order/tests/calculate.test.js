import Type from "../Type";
import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import OrderPage from "../OrderPage";

test("update product price when products change", async () => {
  const event = userEvent.setup();
  render(<Type orderType="products" />);

  const productsTotal = screen.getByText("총 가격 :", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  await event.clear(americaInput);
  await event.type(americaInput, "1");
  expect(productsTotal).toHaveTextContent("1000");
});

test("update option price when options change", async () => {
  const event = userEvent.setup();
  render(<Type orderType="options" />);

  const optionsTotal = screen.getByText("총 가격 : ", { exact: false });
  expect(optionsTotal).toHaveTextContent("0");

  const insuranceCheckbox = await screen.findByRole("checkbox", { name: /insurance/i });
  const dinnerCheckbox = await screen.findByRole("checkbox", { name: /dinner/i });

  await event.click(insuranceCheckbox);
  expect(optionsTotal).toHaveTextContent("500");

  await event.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("1000");

  await event.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("500");
});

describe("total price", () => {
  test("#1", async () => {
    const event = userEvent.setup();
    render(<OrderPage />);

    const total = screen.getByText("Total Price :", { exact: false });
    expect(total).toHaveTextContent("0");

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });
    await event.clear(americaInput);
    await event.type(americaInput, "1");

    expect(total).toHaveTextContent("1000");
  });
  test("#2", async () => {
    const event = userEvent.setup();
    render(<OrderPage />);

    const total = screen.getByText("Total Price :", { exact: false });
    expect(total).toHaveTextContent("0");

    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: /insurance/i,
    });
    await event.click(insuranceCheckbox);

    expect(total).toHaveTextContent("500");
  });
  test("#3", async () => {
    const event = userEvent.setup();
    render(<OrderPage />);

    const total = screen.getByText("Total Price :", { exact: false });
    expect(total).toHaveTextContent("0");

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });
    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: /insurance/i,
    });

    await event.click(insuranceCheckbox);

    await event.clear(americaInput);
    await event.type(americaInput, "3");

    await event.clear(americaInput);
    await event.type(americaInput, "1");

    expect(total).toHaveTextContent("1500");
  });
});
