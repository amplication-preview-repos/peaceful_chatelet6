import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ContactUpdateInput = {
  clients?: ClientWhereUniqueInput | null;
  company?: string | null;
  lastName?: string | null;
  name?: string | null;
  orders?: OrderWhereUniqueInput | null;
};
