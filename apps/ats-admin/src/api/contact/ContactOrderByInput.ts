import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  clientsId?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  name?: SortOrder;
  ordersId?: SortOrder;
  updatedAt?: SortOrder;
};
