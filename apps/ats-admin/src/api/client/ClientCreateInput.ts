import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ClientCreateInput = {
  description?: string | null;
  mainContact?: ContactWhereUniqueInput | null;
  name?: string | null;
  orders?: OrderWhereUniqueInput | null;
};
