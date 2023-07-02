import { createHashRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import HomePage from "../home/HomePage";
import LoginPage from "../login/LoginPage";
import ErrorPage from "../error/ErrorPage";
import { ROUTES } from "../../routing/routes";
import OffersPage from "../offersPage/OffersPage";
import ServicesPage from "../servicesPage/ServicesPage";
import GalleryPage from "../galleryPage/GalleryPage";
import ReviewsPage from "./ReviewsPage";
import SearchResultsPage from "../search/SearchResultsPage";

export const router = createHashRouter([
  {
    path: ROUTES.index,
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.offers,
        element: <OffersPage />,
      },
      {
        path: ROUTES.services,
        element: <ServicesPage />,
      },
      {
        path: ROUTES.gallery,
        element: <GalleryPage />,
      },
      {
        path: ROUTES.reviews,
        element: <ReviewsPage />,
      },
      {
        path: ROUTES.search(""),
        element: <SearchResultsPage />,
      },
      {
        path: ROUTES.login,
        element: <LoginPage />,
      },
    ],
  },
]);
