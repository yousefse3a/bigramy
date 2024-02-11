import Ebooks from "./Pages/Ebooks/Ebooks";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EbookDetails from "./Pages/EbookDetails/EbookDetails";
import Root from "./Pages/Root/Root";

function routers() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Ebooks />,
        },
        { path: "/Ebook/:id", element: <EbookDetails /> },
      ],
    }
  ]);
  return routers;
}

function App() {
  return <RouterProvider router={routers()} />;
}

export default App;
