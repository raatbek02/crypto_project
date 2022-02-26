import Main from "./components/Main/Main";
import Admin from "./pages/Admin/Admin";
import TopCryptos from "./pages/CryptosAndNews/TopCryptos/TopCryptos";
import Home from "./pages/Home";
import Htu from "./pages/Htu/Htu";
// import Test from "./pages/Test/Test";
import { ADMIN, CRYPTOS_AND_NEWS, HOME, HTU, TEST } from "./utils/consts";

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
  {
    path: CRYPTOS_AND_NEWS,
    Component: <TopCryptos />,
  },
  {
    path: HTU,
    Component: <Htu />,
  },
];
