import { Placement as TPlacement } from "../api/placement/Placement";

export const PLACEMENT_TITLE_FIELD = "id";

export const PlacementTitle = (record: TPlacement): string => {
  return record.id?.toString() || String(record.id);
};
