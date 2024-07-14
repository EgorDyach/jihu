import { useAppDispatch } from "@hooks/useAppDispatch";
import { HeaderContacts } from "./HeaderContacts";
import { HeaderNav } from "./HeaderNav";
import { uiActions } from "@store/ui";

export const Header = () => {
  const dispatch = useAppDispatch();
  dispatch(uiActions.getCartFromLocal());
  return (
    <>
      <HeaderContacts />
      <HeaderNav />
    </>
  );
};
