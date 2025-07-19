import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import getPastOrder from "../api/getPastOrder";
import getPastOrders from "../api/getPastOrders";
import Modal from "../Modal";
import { convertCurrency } from "../utility";

export const Route = createLazyFileRoute("/past")({ component: PastOrders });

function PastOrders() {
  const [page, setPage] = useState(1);
  const [focusedOrder, setFocusedOrder] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000,
  });
  const { data: pastOrderData, isLoading: isLoadingPastOrder } = useQuery({
    queryKey: ["past-order", focusedOrder],
    queryFn: () => getPastOrder(focusedOrder),
    staleTime: 86400000, // one day in milliseconds
    enabled: !!focusedOrder,
  });

  if (isLoading) {
    return (
      <div className="past-orders">
        <h2>loading...</h2>
      </div>
    );
  }

  return (
    <div className="past-orders">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Date</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.order_id}>
              <td>
                <button onClick={() => setFocusedOrder(order.order_id)}>
                  {order.order_id}
                </button>
              </td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button disabled={data.length > 10} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      {focusedOrder && (
        <Modal>
          <h2>Order #{focusedOrder}</h2>
          {isLoadingPastOrder ? (
            <h2>loading...</h2>
          ) : (
            <table>
              <thead>
                <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Size</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {pastOrderData.orderItems.map((pizza) => (
                  <tr key={`${pizza.pizzaTypeId}_${pizza.size}`}>
                    <td>
                      <img src={pizza.image} alt={pizza.name} />
                    </td>
                    <td>{pizza.name}</td>
                    <td>{pizza.size}</td>
                    <td>{pizza.quantity}</td>
                    <td>{convertCurrency(pizza.price)}</td>
                    <td>{convertCurrency(pizza.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button onClick={() => setFocusedOrder(null)}>Close</button>
        </Modal>
      )}
    </div>
  );
}
