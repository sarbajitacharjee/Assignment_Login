import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import AccountDetails from "./pages/AccountDetails";
import Login from "./pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/create-account", element: <CreateAccount /> },
  { path: "/account", element: <AccountDetails /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
