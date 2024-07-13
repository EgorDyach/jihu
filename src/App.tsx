import { RouterProvider } from "react-router-dom";
import { appRoutersConfig } from "@lib/configs/RouterConfig";
import { GlobalStyles } from "@lib/theme/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={appRoutersConfig}></RouterProvider>
    </>
  );
}

export default App;
