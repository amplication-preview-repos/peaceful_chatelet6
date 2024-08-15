import { Shortlist as TShortlist } from "../api/shortlist/Shortlist";

export const SHORTLIST_TITLE_FIELD = "id";

export const ShortlistTitle = (record: TShortlist): string => {
  return record.id?.toString() || String(record.id);
};
