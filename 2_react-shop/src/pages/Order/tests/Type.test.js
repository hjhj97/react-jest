import { render, screen } from "@testing-library/react";
import Type from "../Type";
import { server } from "../../../mocks/server";

test("display image from server", async () => {
  render(<Type orderType="products" />);

  const productImages = await screen.findAllByRole("img", { name: /product$/i });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((elem) => elem.alt);
  expect(altText).toEqual(["America product", "England product"]);
});

test("when fail to fetch data,show error", async () => {
  server.resetHandlers("http://localhost:5001/products", (req, res, ctx) => {
    return res(ctx.status(500));
  });

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("에러 발생");
});

test("fetch option", async () => {
  render(<Type orderType="options" />);

  const optionCheckboxes = await screen.findAllByRole("checkbox");
  expect(optionCheckboxes).toHaveLength(2);
});
