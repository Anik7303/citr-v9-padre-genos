import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt text render of pizza image", async () => {
  const name = "My favorite pizza";
  const image = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} image={image} description="cool browser stuff" />,
  );

  const img = await screen.getByRole("img");

  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("src", image);
  await expect.element(img).toHaveAttribute("alt", name);
});
