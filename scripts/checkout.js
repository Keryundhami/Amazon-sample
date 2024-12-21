import { renderOrderSummary } from "./checkOut/orderSummary.js";
import { renderPaymentSummary } from "./checkOut/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
