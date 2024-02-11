import UsersContextProvider from "../contexts/UsersContexts";
import CreatePage from "../pages/CreatePage";
import DoneTasksPage from "../pages/DoneTasksPage";
import MainPage from "../pages/MainPage";
import UpdatePage from "../pages/UpdatePage";

const routes = [

{  element: ( 
  <div> 
<UsersContextProvider>
  <MainPage/>
  <p>Divider</p>
  <MainPage/>
</UsersContextProvider>
  </div>
  ),
  path: "/"},
 

  { element: <CreatePage />, 
  path: "/create" },

  {
    element: <UpdatePage />,
    path: "/update/:userId"
    // path: "/update/:iId",

  },

  {
    element: <DoneTasksPage />,
    path: "/DoneTasksPage"
  }
]

export default routes;
