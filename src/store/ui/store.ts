import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uiStateName } from "./types";
import { uiInitialState } from "./constants";
import { Robot } from "@type/robots";

const uiSlice = createSlice({
  name: uiStateName,
  initialState: uiInitialState,
  reducers: {
    setRobots(state, { payload }: PayloadAction<Robot[]>) {
      state.robots = payload;
    },
    setFilteredRobots(
      state,
      { payload }: PayloadAction<{ minPrice: number; maxPrice: number }>,
    ) {
      state.filteredRobots = state.robots.filter(
        (robot) =>
          robot.price >= payload.minPrice && robot.price <= payload.maxPrice,
      );
    },
    setRequestStarted(state, { payload }: PayloadAction<string>) {
      state.requests[payload] = "pending";
    },
    setRequestFinished(state, { payload }: PayloadAction<string>) {
      state.requests[payload] = "fetched";
    },
    resetRequest(state, { payload }: PayloadAction<string>) {
      state.requests[payload] = "idle";
    },
  },
});

export const { name, reducer, actions } = uiSlice;
