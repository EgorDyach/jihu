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
    setFilteredNoFilters(state, { payload }: PayloadAction<Robot[]>) {
      state.filteredRobots = payload;
    },
    setFilteredRobots(
      state,
      {
        payload,
      }: PayloadAction<{
        minPrice: number;
        maxPrice: number;
        activeSort: "POPULAR" | "UP_PRICE" | "DOWN_PRICE";
      }>,
    ) {
      const filtered = state.robots.filter(
        (robot) =>
          robot.price >= payload.minPrice && robot.price <= payload.maxPrice,
      );
      if (payload.activeSort === "DOWN_PRICE")
        state.filteredRobots = filtered.sort((a, b) => b.price - a.price);
      else if (payload.activeSort === "UP_PRICE")
        state.filteredRobots = filtered.sort((a, b) => a.price - b.price);
      else state.filteredRobots = filtered;
    },
    addToCart(state, { payload }: PayloadAction<Robot>) {
      localStorage.setItem(
        "cartJihu",
        JSON.stringify([...state.cart, payload]),
      );
      state.cart = [...state.cart, payload];
    },
    removeFromCart(state, { payload }: PayloadAction<Robot>) {
      localStorage.setItem(
        "cartJihu",
        JSON.stringify(state.cart.filter((el) => el.id !== payload.id)),
      );
      state.cart = state.cart.filter((el) => el.id !== payload.id);
    },
    getCartFromLocal(state, { payload }: PayloadAction<void>) {
      payload;
      const res = localStorage.getItem("cartJihu");
      if (res) state.cart = JSON.parse(res);
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
