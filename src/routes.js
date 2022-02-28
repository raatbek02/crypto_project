import Main from "./components/Main/Main";
import Admin from "./pages/Admin/Admin";
import TopCryptos from "./pages/CryptosAndNews/TopCryptos/TopCryptos";
import Home from "./pages/Home";
import Htu from "./pages/Htu/Htu";
import About from "./pages/About/About";
// import Test from "./pages/Test/Test";
import {
  ADMIN,
  CRYPTOS_AND_NEWS,
  HOME,
  HTU,
  TEST,
  ABOUT,
  CONTACT_US,
} from "./utils/consts";
import ContactUs from "./pages/ContactUs/ContactUs";

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

  {
    path: ABOUT,
    Component: <About />,
  },
  {
    path: CONTACT_US,
    Component: <ContactUs />,
  },
];
