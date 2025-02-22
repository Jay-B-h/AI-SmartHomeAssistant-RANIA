import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Idle from "./pages/Idle/Idle";
import Listening from "./pages/Listening/Listening";
import Loading from "./pages/Loading/Loading";
import Response from "./pages/Response/Response";
import { WebSocketProvider } from "./hooks/useWebSocket";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Idle />,
  },
  {
    path: "/listening",
    element: <Listening />,
  },
  {
    path: "/loading",
    element: <Loading />
  },
  {
    path: "/response",
    element: <Response />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WebSocketProvider socketUrl="ws://localhost:8001/">
      <RouterProvider router={router} />
    </WebSocketProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
