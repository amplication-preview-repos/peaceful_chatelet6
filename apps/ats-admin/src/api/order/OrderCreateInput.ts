import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";

export type OrderCreateInput = {
  client?: ClientWhereUniqueInput | null;
  contact?: ContactWhereUniqueInput | null;
};
