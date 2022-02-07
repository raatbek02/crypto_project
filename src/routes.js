import Home from "./pages/Home";
import Test from "./pages/Test/Test";
import { HOME, TEST } from "./utils/consts";

export const publicRoutes = [
  {
    path: TEST,
    Component: <Test />,
  },
  {
    path: HOME,
    Component: <Home />,
  },
];
