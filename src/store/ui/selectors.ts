import { Robot } from "@type/robots";
import { RequestState, StoreWithUIState, UIState, uiStateName } from "./types";

const getState = (store: StoreWithUIState): UIState => store[uiStateName];

export const getRequests = (
  s: StoreWithUIState,
): Record<string, RequestState> => getState(s).requests;

export const getRobots = (s: StoreWithUIState): Robot[] => getState(s).robots;

export const getFiltered = (s: StoreWithUIState): Robot[] =>
  getState(s).filteredRobots;

export const getCart = (s: StoreWithUIState): Robot[] => getState(s).cart;
