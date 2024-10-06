import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import Common from "../layouts/Common";
import HomePage from "../pages/HomePage";
import Error from "../pages/Error";
import SingleCourse from "../pages/SIngleCourse";
import Courses from "../components/Courses";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <Common></Common>,
    children: [
      {
        path: `${ROUTES.HOME}`,
        element: <HomePage></HomePage>,
      },
      {
        path: `${ROUTES.COURSES}`,
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
      {
        path: `${ROUTES.SINGLE_COURSE.STATIC}`,
        loader: ({ params }) =>
          fetch(`${ROUTES.BASE_URL}/api/products/${params.id}`),
        element: (
          <PrivateRoute>
            <SingleCourse></SingleCourse>
          </PrivateRoute>
        ),
      },
      {
        path: `${ROUTES.LOGIN}`,
        element: <Login></Login>,
      },
      {
        path: `${ROUTES.REGISTER}`,
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "*",
    element: <Common></Common>,
    children: [
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
