import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ClientUpdateInput = {
  description?: string | null;
  mainContact?: ContactWhereUniqueInput | null;
  name?: string | null;
  orders?: OrderWhereUniqueInput | null;
};
