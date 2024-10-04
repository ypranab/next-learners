import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import Common from "../layouts/Common";
import HomePage from "../pages/HomePage";
import SingleBookDetails from "../pages/SingleBookDetails";
import FAQ from "../pages/FAQ";
import Error from "../pages/Error";

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
        path: `${ROUTES.SINGLE_BOOK.STATIC}`,
        element: <SingleBookDetails></SingleBookDetails>,
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
