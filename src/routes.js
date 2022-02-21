import Main from "./components/Main/Main";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home";
// import Test from "./pages/Test/Test";
import { ADMIN, HOME, TEST } from "./utils/consts";

export const privateRoutes = [
  {
    path: ADMIN,
    Component: <Admin />,
  },
];

export const publicRoutes = [
  //   {
  //     path: TEST,
  //     Component: <Test />,
  //   },
  {
    path: HOME,
    Component: <Home />,
  },
];
