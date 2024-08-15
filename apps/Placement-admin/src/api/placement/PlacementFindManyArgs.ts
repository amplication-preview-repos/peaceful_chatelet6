import { PlacementWhereInput } from "./PlacementWhereInput";
import { PlacementOrderByInput } from "./PlacementOrderByInput";

export type PlacementFindManyArgs = {
  where?: PlacementWhereInput;
  orderBy?: Array<PlacementOrderByInput>;
  skip?: number;
  take?: number;
};
