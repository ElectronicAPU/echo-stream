import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SignIn from "./screens/SignInScreen";
import SignUp from "./screens/SignUpScrren";
import Home from "./screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./store";
import { NextUIProvider } from "@nextui-org/system";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
