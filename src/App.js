import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultsContainer from "./components/SearchResultsContainer";
import MainBody from "./components/MainBody";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainBody />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchResultsContainer />,
      },
    ],
  },
  {
    path: "demo",
    element: (
      <>
        <Demo1 />
        <Demo2 />
      </>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter}>
          <MainBody />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
