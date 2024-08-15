import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ContactWhereInput = {
  clients?: ClientWhereUniqueInput;
  company?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderWhereUniqueInput;
};
