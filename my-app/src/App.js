import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import MainPage from "./pages/MainPage";
import DebouncePage from "./pages/DebouncePage";
import ThrottlePage from "./pages/ThrottlePage";
import StartTransitionPage from "./pages/StartTransitionPage";
import { styled } from "styled-components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/debounce",
        element: <DebouncePage />,
      },
      {
        path: "/throttle",
        element: <ThrottlePage />,
      },
      {
        path: "/starttransition",
        element: <StartTransitionPage />,
      },
    ],
  },
]);
const Body = styled.div`
  width: 100vw;
  height: 100vh;
`;
function App() {
  return (
    <Body>
      <RouterProvider router={router} />
    </Body>
  );
}

export default App;
