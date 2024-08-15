import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "lastName";

export const ContactTitle = (record: TContact): string => {
  return record.lastName?.toString() || String(record.id);
};
