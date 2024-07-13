import { RouterProvider } from "react-router-dom";
import { appRoutersConfig } from "./libs/configs/routerConfig";

function App() {
  return <RouterProvider router={appRoutersConfig}></RouterProvider>;
}

export default App;
