import { renderHook, waitFor, cleanup } from "@testing-library/react";
import { expect, test, vi, afterEach } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "cali_ckn",
  name: "The California Chicken Pizza",
  category: "Chicken",
  description:
    "Chicken, Artichoke, Spinach, Garlic, Jalapeno Peppers, Fontina Cheese, Gouda Cheese",
  image: "/public/pizzas/cali_ckn.webp",
  size: { S: 12.75, M: 16.75, L: 20.75 },
};

afterEach(cleanup);

test("renders null when first called", () => {
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));

  // let pizza;
  // function TestComponent() {
  //   pizza = usePizzaOfTheDay();
  //   return null;
  // }
  // render(<TestComponent />);
  // expect(pizza).toBeNull();

  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBeNull();
});

test("to call the API and get back the pizza of the day", async () => {
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  await waitFor(() => {
    expect(result.current).toEqual(testPizza);
    expect(fetchMocker).toHaveBeenCalledWith("/api/pizza-of-the-day");
  });
});
