import CreatePage from "../pages/CreatePage";
import MainPage from "../pages/MainPage";
import UpdatePage from "../pages/UpdatePage";

const routes = [
  {
    element: <MainPage />,
    path: "/",
  },

  { element: <CreatePage />, 
  path: "/create" },

  {
    element: <UpdatePage />,
    path: "/update/:userId"
    // path: "/update/:iId",

  },
];

export default routes;
