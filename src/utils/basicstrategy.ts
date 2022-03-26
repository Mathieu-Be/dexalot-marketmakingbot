import { Settings } from "../settings";
import { Order } from "../types/Order";
import { OrderBackbone } from "../types/OrderBackbone";

export const buildStrategy = (currentPrice: number) => {
  let newOrders: OrderBackbone[] = [];

  newOrders.push({
    price: currentPrice + Settings.sell_order_spread,
    quantity: Settings.position_size,
    side: 1, //SELL
  });

  newOrders.push({
    price: currentPrice - Settings.buy_order_spread,
    quantity: Settings.position_size,
    side: 0, //BUY
  });

  return newOrders;
};
