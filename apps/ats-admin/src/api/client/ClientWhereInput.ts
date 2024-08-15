import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ClientWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  mainContact?: ContactWhereUniqueInput;
  name?: StringNullableFilter;
  orders?: OrderWhereUniqueInput;
};
