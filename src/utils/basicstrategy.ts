import { Settings } from "../settings";
import { OrderBackbone } from "../types/OrderBackbone";

export const buildStrategy = (currentPrice: number) => {
  let newOrders: OrderBackbone[] = [];

  newOrders.push({
    price: (currentPrice * (100 + Settings.sell_order_spread)) / 100,
    quantity: Settings.position_size,
    side: 1, //SELL
  });

  newOrders.push({
    price: (currentPrice * (100 - Settings.buy_order_spread)) / 100,
    quantity: Settings.position_size,
    side: 0, //BUY
  });

  return newOrders;
};
