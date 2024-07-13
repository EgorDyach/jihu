import { RouterProvider } from "react-router-dom";
import { appRoutersConfig } from "@lib/configs/RouterConfig";

function App() {
  return <RouterProvider router={appRoutersConfig}></RouterProvider>;
}

export default App;
