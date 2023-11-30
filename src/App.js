import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail, { loader as loaderHotel } from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import Login, { action as actionLogin } from "./pages/auth/Login";
import Signup, { action as actionSignup } from "./pages/auth/Signup";
import { loader as loaderHotels } from "./pages/home/DestinationList/DestinationList";
import Transactions, {
  loader as loaderTransactions,
} from "./pages/transaction/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: loaderHotels,
  },
  {
    path: "/detail/:hotelId",
    element: <Detail />,
    loader: loaderHotel,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/transactions/:user",
    element: <Transactions />,
    loader: loaderTransactions,
  },
  {
    path: "/login",
    element: <Login />,
    action: actionLogin,
  },
  {
    path: "/signup",
    element: <Signup />,
    action: actionSignup,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
