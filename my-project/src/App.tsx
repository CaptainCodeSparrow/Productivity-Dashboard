import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task_manager";
import Timer from "./pages/Timer";


const router = createBrowserRouter([
  {
    path: "/SignUp",
    element: <SignUp/>,
  },

  {
    path: "/SignIn",
    element: <SignIn/>,
  },

  {
    path: "/Task_manager",
    element: <Task_manager/>,
  },

  {
    path: "/Timer",
    element: <Timer/>,
  },


]);


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}