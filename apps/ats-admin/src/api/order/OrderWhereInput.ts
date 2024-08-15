import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  client?: ClientWhereUniqueInput;
  contact?: ContactWhereUniqueInput;
  id?: StringFilter;
};
