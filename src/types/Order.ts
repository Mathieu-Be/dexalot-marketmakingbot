export interface Order {
  id: string;
  traderaddress?: string;
  tx?: string;
  pair?: string;
  type?: number;
  type2?: number;
  side: number;
  price: number;
  quantity: number;
  totalamount?: string;
  status?: number;
  ts?: string;
  quantityfilled?: string;
  totalfee?: string;
  update_ts?: string;
}
