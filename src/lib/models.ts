export type Lang = "zh" | "en";
export type PublicationStatus =
  | "published"
  | "accepted"
  | "under_review"
  | "manuscript"
  | "shared_task";

export interface PlatformSnapshot {
  name: string;
  handle: string;
  url: string;
  metrics: string[];
  note: string;
}
