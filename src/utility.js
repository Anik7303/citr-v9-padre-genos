const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export function convertCurrency(price) {
  return intl.format(price);
}
