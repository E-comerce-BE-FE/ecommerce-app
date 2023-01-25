import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TransactionPurchase from "pages/TransactionPurchase";
import TransactionSale from "pages/TransactionSale";
import AddNewProduct from "pages/AddNewProduct";
import DetailProduct from "pages/DetailProduct";
import Register from "pages/auth/Register";
import Login from "pages/auth/Login";
import Profile from "pages/Profile";
import Summary from "pages/Summary";
import MyCart from "pages/MyCart";
import Home from "pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/detail-product",
    element: <DetailProduct />,
  },
  {
    path: "/add-new-product",
    element: <AddNewProduct />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/my-cart",
    element: <MyCart />,
  },
  {
    path: "/summary",
    element: <Summary />,
  },
  {
    path: "/transaction-purchase",
    element: <TransactionPurchase />,
  },
  {
    path: "/transaction-sale",
    element: <TransactionSale />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
