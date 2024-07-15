import { requestRobots$ } from "@lib/api/robots";
import { uiActions } from ".";
import { AppDispatch } from "..";
import { getMaxPrice } from "@modules/shopPage/helpers";
import { toast } from "react-toastify";

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
    toast("Ошибка при получении информации о роботах");
  } finally {
    dispatch(uiActions.setRequestFinished("getRobots"));
  }
};
