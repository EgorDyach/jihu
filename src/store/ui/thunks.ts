import { requestRobots$ } from "@lib/api/robots";
import { uiActions } from ".";
import { AppDispatch } from "..";
import { getMaxPrice } from "@modules/shopPage/helpers";

export const fetchRobots = () => async (dispatch: AppDispatch) => {
  dispatch(uiActions.setRequestStarted("getRobots"));
  try {
    const robots = await requestRobots$();
    dispatch(uiActions.setRobots(robots));
    dispatch(
      uiActions.setFilteredRobots({
        minPrice: 0,
        maxPrice: getMaxPrice(robots),
        activeSort: "POPULAR",
      }),
    );
  } catch (e) {
    alert("Ошибка при получении информации о роботах");
  } finally {
    dispatch(uiActions.setRequestFinished("getRobots"));
  }
};
