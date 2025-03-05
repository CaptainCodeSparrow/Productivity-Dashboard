import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import TaskManager from "./pages/TaskManager";
import Timer from "./pages/Timer";


const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp/>,
  },

  {
    path: "/sign-in",
    element: <SignIn/>,
  },

  {
    path: "/task-manager",
    element: <TaskManager/>,
  },

  {
    path: "/timer",
    element: <Timer/>,
  },

  {
    path: "/dashboard",
    element: <Dashboard/>,
  },


]);


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}