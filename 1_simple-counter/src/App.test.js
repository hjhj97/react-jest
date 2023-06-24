import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("counter starts at 0", () => {
  render(<App />);
  const counterEl = screen.getByTestId("counter");

  expect(counterEl).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const minusButtonEl = screen.getByTestId("minus-button");
  expect(minusButtonEl).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const plusButtonEl = screen.getByTestId("plus-button");
  expect(plusButtonEl).toHaveTextContent("+");
});

test("minus button decrease 1", () => {
  render(<App />);
  const minusButtonEl = screen.getByTestId("minus-button");
  fireEvent.click(minusButtonEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(-1);
});

test("plus button increase 1", () => {
  render(<App />);
  const plusButtonEl = screen.getByTestId("plus-button");
  fireEvent.click(plusButtonEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(1);
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonEl = screen.getByTestId("on/off-button");
  expect(buttonEl).toHaveStyle({ backgroundColor: "blue" });
});

test("on/off button disabled", () => {
  render(<App />);
  const buttonEl = screen.getByTestId("on/off-button");
  const minusButtonEl = screen.getByTestId("minus-button");
  const plusButtonEl = screen.getByTestId("plus-button");
  fireEvent.click(buttonEl);

  expect(minusButtonEl).toBeDisabled();
  expect(plusButtonEl).toBeDisabled();
});
