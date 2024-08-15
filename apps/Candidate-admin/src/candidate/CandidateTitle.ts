import { Candidate as TCandidate } from "../api/candidate/Candidate";

export const CANDIDATE_TITLE_FIELD = "lastName";

export const CandidateTitle = (record: TCandidate): string => {
  return record.lastName?.toString() || String(record.id);
};
