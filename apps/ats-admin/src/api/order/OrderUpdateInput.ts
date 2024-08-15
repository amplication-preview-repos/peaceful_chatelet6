import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";

export type OrderUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  contact?: ContactWhereUniqueInput | null;
};
