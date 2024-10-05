import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import Common from "../layouts/Common";
import HomePage from "../pages/HomePage";
import FAQ from "../pages/FAQ";
import Error from "../pages/Error";
import SIngleCourse from "../pages/SIngleCourse";

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
        path: `${ROUTES.SINGLE_COURSE.STATIC}`,
        loader: ({ params }) =>
          fetch(`${ROUTES.BASE_URL}/api/products/${params.id}`),
        element: <SIngleCourse></SIngleCourse>,
      },
      {
        path: `${ROUTES.FAQ}`,
        element: <FAQ></FAQ>,
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
