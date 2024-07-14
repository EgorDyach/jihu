import { Robot } from "@type/robots";

export const uiStateName = "ui";

export type RequestState = "idle" | "pending" | "fetched";

export type UIState = {
  requests: Record<string, RequestState>;
  robots: Robot[];
  filteredRobots: Robot[];
  cart: Robot[];
};

export type StoreWithUIState = {
  [uiStateName]: UIState;
};
