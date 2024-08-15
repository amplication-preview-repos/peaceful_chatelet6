import { Client } from "../client/Client";
import { Contact } from "../contact/Contact";

export type Order = {
  client?: Client | null;
  contact?: Contact | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
