import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultsContainer from "./components/SearchResultsContainer";
import MainBody from "./components/MainBody";

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
