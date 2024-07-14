import { RouterProvider } from "react-router-dom";
import { appRoutersConfig } from "@lib/configs/RouterConfig";
import { GlobalStyles } from "@lib/theme/globalStyles";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={appRoutersConfig}></RouterProvider>
    </Provider>
  );
}

export default App;
