import { Client } from "../client/Client";
import { Order } from "../order/Order";

export type Contact = {
  clients?: Client | null;
  company: string | null;
  createdAt: Date;
  id: string;
  lastName: string | null;
  name: string | null;
  orders?: Order | null;
  updatedAt: Date;
};
