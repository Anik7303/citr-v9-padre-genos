import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt text renders on pizza image", () => {
  const name = "My Favorite Pizza";
  const image = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={image} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(image);
  expect(img.alt).toBe(name);
});

test("to have default image if none if provided", () => {
  const screen = render(
    <Pizza name="some pizza" description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
