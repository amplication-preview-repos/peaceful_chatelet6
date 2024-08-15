import { StringFilter } from "../../util/StringFilter";

export type CandidateWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  name?: StringFilter;
  status?: "Option1";
};
