import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import Cart from "../Cart";

test("snapshot with nothing in cart", () => {
  const { asFragment } = render(<Cart cart={[]} checkout={() => null} />);
  expect(asFragment()).toMatchSnapshot();
});
