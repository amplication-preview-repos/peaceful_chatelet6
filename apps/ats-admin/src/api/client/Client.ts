import { Contact } from "../contact/Contact";
import { Order } from "../order/Order";

export type Client = {
  createdAt: Date;
  description: string | null;
  id: string;
  mainContact?: Contact | null;
  name: string | null;
  orders?: Order | null;
  updatedAt: Date;
};
