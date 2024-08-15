import { ShortlistWhereInput } from "./ShortlistWhereInput";
import { ShortlistOrderByInput } from "./ShortlistOrderByInput";

export type ShortlistFindManyArgs = {
  where?: ShortlistWhereInput;
  orderBy?: Array<ShortlistOrderByInput>;
  skip?: number;
  take?: number;
};
