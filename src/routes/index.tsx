import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "pages";
import DetailProduct from "pages/DetailProduct";
import Register from "pages/auth/Register";
import Login from "pages/auth/Login";

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
    path: "/detailproduct",
    element: <DetailProduct />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
