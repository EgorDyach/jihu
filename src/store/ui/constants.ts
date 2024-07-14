import { UIState } from "./types";

export const uiInitialState: UIState = {
  robots: [],
  filteredRobots: [],
  requests: {},
  filter: {
    tools: [],
    platforms: [],
    minPrice: null,
    maxPrice: null,
  },
};
