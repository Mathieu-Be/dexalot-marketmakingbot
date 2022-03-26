import { OrderBackbone } from "./OrderBackbone";

export interface Order extends OrderBackbone {
  id: string;
  traderaddress?: string;
  tx?: string;
  pair?: string;
  type?: number;
  type2?: number;
  totalamount?: string;
  status?: number;
  ts?: string;
  quantityfilled?: string;
  totalfee?: string;
  update_ts?: string;
}
