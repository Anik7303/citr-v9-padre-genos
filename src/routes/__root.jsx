import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useState } from "react";
import { CartContext } from "../contexts";
import Header from "../Header";
import PizzaOfTheDay from "../PizzaOfTheDay";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const cartHook = useState([]);
  return (
    <>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Outlet />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
}
